import NextAuth from "next-auth";
import authOptions from "@/lib/auth";

const handler = NextAuth(authOptions)

export {handler as GET , handler as POST} //handler get or post types ki requests pr kaam acche se krega