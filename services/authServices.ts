import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/config/database";
import {User} from "@/models/User";


export const authOption = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                },
            },
        }),
    ],
    callbacks: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        async signIn({profile}: { profile: any }) {
            await connectDB();

            const userExists = await User.findOne({email: profile.email});
            console.log(userExists);
            if (!userExists) {
                await User.create({
                    email: profile.email,
                    username: profile.name,
                    image: profile.picture,
                });
            }
            return true;
        },

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        async session({session}: { session: any }) {
            const user = await User.findOne({
                email: session?.user.email,
            });
            session.user.id = user?._id.toString();

            return session;
        }
    }
};