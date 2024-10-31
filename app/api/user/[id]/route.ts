import {NextRequest} from "next/server";
import connectDB from "@/config/database";

import {User} from "@/models/User";

export const GET = async (request: NextRequest, {params}: { params: Promise<{ id: string }> }) => {
    try {
        const {id} = await params;
        await connectDB();

        const property = await User.findById(id);
        if (!property) {
            return new Response("Property Not found", {status: 404});
        }
        return new Response(JSON.stringify(property), {status: 200});
    } catch (error) {
        console.error("error occurred while fetching property upload by user ", error);
        return new Response("Something went wrong", {status: 500});
    }
};