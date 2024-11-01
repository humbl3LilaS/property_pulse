import connectDB from "@/config/database";
import {getSessionUser} from "@/services/authServices";
import {Message, TMessage} from "@/models/Message";

export const POST = async (request: Request, {params}: { params: Promise<{ id: string }> }) => {
    try {
        await connectDB();
        const {id} = await params;
        const message: Partial<TMessage> = await request.json();
        const sessionUser = await getSessionUser();
        if (!id) {
            return new Response("Bad Request", {status: 400});
        }
        if (id !== sessionUser?.id) {
            return new Response("Unauthorized", {status: 401});
        }
        if (id === message?.receiver?.toString()) {
            return new Response("Bad request", {status: 400});
        }
        const newMessage = new Message({
            sender: id,
            receiver: message?.receiver,
            property: message?.property,
            name: message?.name,
            email: message?.email,
            phone: message?.phone,
            message: message?.message,
            isRead: message?.isRead,
        });
        await newMessage.save();
        return new Response(JSON.stringify(newMessage), {status: 200});

    } catch (error) {
        console.error("error occurred while posting message ", error);
        return new Response("Something went wrong", {status: 500});
    }
};