import {User} from "@/models/User";
import {Property} from "@/models/Property";

export const GET = async (request: Request, {params}: { params: Promise<{ id: string }> }) => {
    try {
        const {id} = await params;
        if (!id) {
            return new Response("Bad Request", {status: 400});
        }
        const user = await User.findById(id);
        if (!user) {
            return new Response("User not found", {status: 404});
        }
        const bookmarks = await Property.find({_id: {$in: user.bookmarks}});
        return new Response(JSON.stringify(bookmarks), {status: 200});
    } catch (error) {
        console.log("error posting bookmark", error);
        return new Response("something went wrong", {status: 500});
    }
};