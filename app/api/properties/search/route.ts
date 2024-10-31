// GET /api/properties/search
import connectDB from "@/config/database";
import {Property} from "@/models/Property";

type QueryType = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    $or: Array<{ [key: string]: any }>;
    type?: string;
};

export const GET = async (req: Request) => {
    try {
        await connectDB();
        const {searchParams} = new URL(req.url);
        const location = searchParams.get("location");
        const propertyType = searchParams.get("propertyType");


        const locationPattern = new RegExp(location ?? "", "i");

        const query: QueryType = {
            $or: [
                {name: locationPattern},
                {description: locationPattern},
                {"location.state": locationPattern},
                {"location.city": locationPattern},
                {"location.street": locationPattern},
            ],
        };

        if (propertyType && propertyType !== "All") {
            query.type = propertyType;
        }

        const properties = await Property.find(query);

        return new Response(JSON.stringify(properties), {status: 200});
    } catch (error) {
        console.error("error during search properties", error);
        return new Response("something went wrong", {status: 500});
    }
};