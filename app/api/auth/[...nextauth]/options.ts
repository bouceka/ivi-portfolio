import { getUsers } from '@/app/_actions/userActions';
import { compare, hash } from 'bcryptjs';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export async function hashPassword(password: string) {
    const hashedPassword = await hash(password, 12);
    return hashedPassword;
}

export async function verifyPassword(password: string, hashedPassword: string) {
    const isValid = await compare(password, hashedPassword);
    return isValid;
}

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                username: { label: 'Username', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                const usersCollection = getUsers;
                try {
                    if (!credentials) {
                        throw new Error('No credentials!');
                    }

                    const user = await usersCollection.find((user) => user.name == credentials.username);

                    if (!user) {
                        throw new Error('No user found!');
                    }

                    const isValid = await verifyPassword(credentials?.password, user.password);
                    if (isValid) {
                        return user;
                    } else {
                        return null;
                    }
                } catch (error) {
                    console.log('Error: ', error);
                    return null;
                }
            },
        }),
    ],
    session: { strategy: 'jwt' },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/login',
    },
    callbacks: {
        // Ref: https://authjs.dev/guides/basics/role-based-access-control#persisting-the-role
        async jwt({ token, user }) {
            if (user) token.role = user.role;
            return token;
        },
        // If you want to use the role in client components
        async session({ session, token }) {
            if (session?.user) {
                session.user.role = token.role as string;
                session.user.id = token.sub as string
            }
            return session;
        },
    },
};
