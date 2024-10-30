import connectDB from "@/config/database";
import {Property} from "@/models/Property";
import {getSessionUser} from "@/services/authServices";
import cloudinary from "@/config/cloudinary";

// GET /api/properties
export const GET = async () => {
    try {
        await connectDB();

        const properties = await Property.find();
        return new Response(JSON.stringify(properties), {status: 200});
    } catch (e) {
        console.log(e);
        return new Response("something went wrong", {status: 400});
    }
};

export const POST = async (request: Request) => {
    try {
        await connectDB();

        /*
        * get session and fetch userId from the db
        * */
        const user = await getSessionUser();
        if (!user) {
            return new Response("Unauthorized", {status: 401});
        }
        /*
        * Transform from data into PropertyObject Shape to store in db
        * */

        const data = await request.formData();
        const amenities = data.getAll("amenities");
        const images = (data.getAll("images") as File[]).filter(image => image.name !== "");
        const propertyData = {
            owner: user?.id,
            type: data.get("type"),
            name: data.get("name"),
            description: data.get("description"),
            location: {
                street: data.get("street"),
                city: data.get("city"),
                state: data.get("state"),
                zipcode: data.get("zipcode"),
            },
            beds: Number(data.get("beds")),
            baths: Number(data.get("baths")),
            square_feet: Number(data.get("squareFeet")),
            amenities,
            rates: {
                weekly: Number(data.get("weekly")) ? Number(data.get("weekly")) : undefined,
                monthly: Number(data.get("monthly")) ? Number(data.get("monthly")) : undefined,
                nightly: Number(data.get("nightly")) ? Number(data.get("nightly")) : undefined,
            },
            seller_info: {
                name: data.get("sellerName"),
                email: data.get("sellerEmail"),
                phone: data.get("sellerPhone"),
            },
            is_featured: false,
            images: [] as string[],
        };

        // Upload image(s) to Cloudinary
        const imageUploadPromises = [];

        for (const image of images) {
            const imageBuffer = await image.arrayBuffer();
            const imageArray = Array.from(new Uint8Array(imageBuffer));
            const imageData = Buffer.from(imageArray);

            // Convert the image data to base64
            const imageBase64 = imageData.toString("base64");

            // Make request to upload to Cloudinary
            const result = await cloudinary.uploader.upload(
                `data:image/png;base64,${imageBase64}`,
                {
                    folder: "propertypulse",
                }
            );

            imageUploadPromises.push(result.secure_url);

            // Wait for all images to upload
            const uploadedImages = await Promise.all(imageUploadPromises);
            // Add uploaded images to the propertyData object
            propertyData.images = uploadedImages;
        }
        const newProperty = new Property(propertyData);
        await newProperty.save();

        return Response.redirect(`${process.env.NEXTAUTH_URL}/properties/${newProperty._id}`);

    } catch (e) {
        console.log(e);
        return new Response("Something went wrong", {status: 500});
    }
};