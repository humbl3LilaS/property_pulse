import connectDB from "@/config/database";
import {Property} from "@/models/Property";

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