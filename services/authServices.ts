import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/config/database";
import {User} from "@/models/User";
import {AuthOptions, Profile} from "next-auth";


export const authOption: AuthOptions = {
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

        async signIn({profile}: { profile?: Profile }) {
            await connectDB();

            const userExists = await User.findOne({email: profile?.email});
            console.log(userExists);
            if (!userExists) {
                await User.create({
                    email: profile?.email,
                    username: profile?.name,
                    image: profile?.image,
                });
            }
            return true;
        },
    }
};