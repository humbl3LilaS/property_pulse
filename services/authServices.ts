import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/config/database";
import {User} from "@/models/User";
import {AuthOptions, getServerSession, Profile} from "next-auth";


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

export const getSessionUser = async () => {
    try {
        const session = await getServerSession();
        if (!session) {
            return undefined;
        }
        const email = session?.user?.email;

        await connectDB();
        const user = await User.findOne({email: email});
        return {
            id: user?._id.toString(),
            ...session.user,
        };
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e: unknown) {
        return undefined;
    }

};