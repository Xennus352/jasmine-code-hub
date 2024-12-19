import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma";
import GitHub from "next-auth/providers/github";
// import Facebook from "next-auth/providers/facebook";
// import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
    maxAge: 2592000, // 30 days
  }, 
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
      profile: (profile) => ({
        id: String(profile.id),
        name: profile.name || null,
        email: profile.email || null,
        image: profile.avatar_url || null,
        role: profile.role ? profile.role : "USER",
      }),
    }),
    // Facebook({
    //   clientId: process.env.AUTH_FACEBOOK_ID,
    //   clientSecret: process.env.AUTH_FACEBOOK_SECRET,
    // }),
    // Google({
    //   clientId: process.env.AUTH_GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET,
    //   profile: (profile) => ({
    //     id: String(profile.id),
    //     name: profile.name || null,
    //     email: profile.email || null,
    //     image: profile.avatar_url || null,
    //     role: profile.role ? profile.role : "USER",
    //   }),
    // }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session }) {
      return session;
    },
  },
});
