// imports
import { CredentialUser, CustomJWT, CustomSession } from "@/types/nextAuth";
import NextAuth from "next-auth"
import Credentials from 'next-auth/providers/credentials';

const handler = NextAuth({
    providers: [
        Credentials({
          name: 'Credentials',
          credentials: {
            username: { label: "Username", type: "text", placeholder: "jsmith" },
            password: { label: "Password", type: "password" },
            email: { label: "Email", type: "email" }
          },
          async authorize(credentials, req) {
            try {
              const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`, {
                method: 'POST',
                body: JSON.stringify({
                  username: credentials?.username,
                  password: credentials?.password,
                }),
                headers: { "Content-Type": "application/json" }
              })

              if (res.ok) {
                return res.json()
              }
              
              return null
            } catch (error) {
              console.error(error)
              return null
            }
          }
        })
      ],
      session: {
        strategy: 'jwt'
      },
      secret: process.env.NEXTAUTH_SECRET,
      pages: {
        signIn: '/login'
      },
      callbacks: {
        async session({ session, token }) {
          var customSession = session as CustomSession
          var customToken = token as CustomJWT
          customSession.user = customToken.user;
          customSession.access_token = customToken.access_token
          return customSession;
        },
        async jwt({ token, user }) {
          var customToken = token as CustomJWT
          var customUser = user as CredentialUser
          if (user) {
            customToken.user = customUser.user;
            customToken.access_token = customUser.token;
          }
          return customToken;
        }
      }
})

export { handler as GET, handler as POST }