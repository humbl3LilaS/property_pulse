import {TUser, User} from "@/models/User";
import {getSessionUser} from "@/services/authServices";
import connectDB from "@/config/database";

export const POST = async (request: Request) => {
    try {
        const user = await getSessionUser();
        if (!user || !user.id) {
            return new Response("Unauthorized access", {status: 401});
        }
        const {propertyId} = await request.json();

        await connectDB();
        const currentUser: TUser | null = await User.findById(user.id);
        if (!currentUser) {
            return new Response("User not found", {status: 404});
        }
        const currentBookmark = currentUser?.bookmarks;
        if (!currentBookmark?.includes(propertyId.toString())) {
            const updatedUser = await User.findByIdAndUpdate(user.id, {bookmarks: [...currentBookmark, propertyId]});
            return new Response(JSON.stringify(updatedUser), {status: 200});
        } else {
            const updatedBookmark = currentBookmark.filter(id => id.toString() !== propertyId);
            const updatedUser = await User.findByIdAndUpdate(user.id, {bookmarks: [...updatedBookmark]});
            return new Response(JSON.stringify(updatedUser), {status: 200});
        }
    } catch (e) {
        console.log("error posting bookmark", e);
        return new Response("something went wrong", {status: 400});
    }
};