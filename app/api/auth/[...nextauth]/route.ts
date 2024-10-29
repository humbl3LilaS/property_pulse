import NextAuth from "next-auth";
import {authOption} from "@/services/authServices";

const handler = NextAuth(authOption);

export {handler as GET, handler as POST};