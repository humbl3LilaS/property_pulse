import connectDB from "@/config/database";
import {Property} from "@/models/Property";
import {NextRequest} from "next/server";


export const GET = async (request: NextRequest, {params}: { params: Promise<{ userId: string }> }) => {
    try {
        const {userId} = await params;
        await connectDB();

        const property = await Property.find({owner: userId});
        if (!property) {
            return new Response("Property Not found", {status: 404});
        }
        return new Response(JSON.stringify(property), {status: 200});
    } catch (error) {
        console.error("error occurred while fetching property upload by user ", error);
        return new Response("Something went wrong", {status: 500});
    }
};