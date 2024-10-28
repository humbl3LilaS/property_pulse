import connectDB from "@/config/database";

export const GET = async () => {
    try {
        await connectDB();
        return new Response("Hello world", {status: 200});
    } catch (e) {
        console.log(e);
        return new Response("something went wrong", {status: 400});
    }
};