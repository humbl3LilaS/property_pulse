import connectDB from "@/config/database";
import {Property} from "@/models/Property";
import {getServerSession} from "next-auth";
import {User} from "@/models/User";


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
        const session = await getServerSession();
        if (!session) {
            return new Response("Unauthorized", {status: 401});
        }

        const user = await User.findOne({email: session?.user?.email});
        const userId = user._id.toString();
        const data = await request.formData();
        const amenities = data.getAll("amenities");
        const images = (data.getAll("images") as File[]).filter(image => image.name !== "");
        const propertyData = {
            owner: userId,
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
            images,
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
            is_featured: false
        };
        console.log(propertyData);

        return new Response(JSON.stringify({message: "success"}), {status: 200});
    } catch (e) {
        console.log(e);
        return new Response("Something went wrong", {status: 500});
    }
};