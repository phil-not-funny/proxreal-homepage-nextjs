import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Add your own authentication logic here
        // This is where you would typically:
        // 1. Validate the credentials
        // 2. Return the user object if valid
        // 3. Return null if invalid
        
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: '/auth/signin',
    // signOut: '/auth/signout',
    // error: '/auth/error',
  },
  session: {
    strategy: "jwt",
  },
});

export { handler as GET, handler as POST };
