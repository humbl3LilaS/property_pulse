import {NextRequest} from "next/server";
import connectDB from "@/config/database";
import {Property} from "@/models/Property";
import {getSessionUser} from "@/services/authServices";

// GET /api/properties/id
export const GET = async (request: NextRequest, {params}: { params: Promise<{ id: string }> }) => {
    try {
        const {id} = await params;
        await connectDB();

        const property = await Property.findById(id);
        if (!property) {
            return new Response("Property Not found", {status: 404});
        }
        return new Response(JSON.stringify(property), {status: 200});

    } catch (error) {
        console.log(error);
        return new Response("Something went wrong", {status: 500});
    }
};

// DELETE /api/properties/id
export const DELETE = async (request: Request, {params}: { params: Promise<{ id: string }> }) => {
    try {
        const {id} = await params;
        await connectDB();
        const user = await getSessionUser();

        if (!user) {
            return new Response("Unauthorized", {status: 400});
        }

        const property = await Property.findByIdAndDelete(id);
        if (!property) {
            return new Response("Property Not found", {status: 401});
        }
        return new Response(JSON.stringify(property), {status: 200});

    } catch (error) {
        console.log(error);
        return new Response("Something went wrong", {status: 500});
    }
};