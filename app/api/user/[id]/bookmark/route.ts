import {TUser, User} from "@/models/User";
import connectDB from "@/config/database";

export const dynamic = 'force-dynamic';

export const GET = async (request: Request, {params}: { params: Promise<{ id: string }> }) => {
    try {
        const {id} = await params;
        if (!id) {
            return new Response("Bad Request", {status: 400});
        }
        await connectDB();
        const user: TUser | null = await User.findById(id);
        if (!user) {
            return new Response("User not found", {status: 404});
        }
        return new Response(JSON.stringify(user.bookmarks), {status: 200});
    } catch (error) {
        console.log("error posting bookmark", error);
        return new Response("something went wrong", {status: 500});
    }
};

export const POST = async (request: Request, {params}: { params: Promise<{ id: string }> }) => {
    try {
        const {id} = await params;
        if (!id) {
            return new Response("Bad Request", {status: 400});
        }
        const {propertyId} = await request.json();

        await connectDB();
        const currentUser: TUser | null = await User.findById(id);
        if (!currentUser) {
            return new Response("User not found", {status: 404});
        }
        const currentBookmark = currentUser?.bookmarks;
        if (!currentBookmark?.includes(propertyId.toString())) {
            const updatedUser = await User.findByIdAndUpdate(id, {bookmarks: [...currentBookmark, propertyId]});
            return new Response(JSON.stringify(updatedUser), {status: 200});
        } else {
            const updatedBookmark = currentBookmark.filter(id => id.toString() !== propertyId);
            const updatedUser = await User.findByIdAndUpdate(id, {bookmarks: [...updatedBookmark]});
            return new Response(JSON.stringify(updatedUser), {status: 200});
        }
    } catch (e) {
        console.log("error posting bookmark", e);
        return new Response("something went wrong", {status: 400});
    }
};