import { DefaultSession } from 'next-auth';
import { DefaultUser } from 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: {
            id: string
            // username: string
            role: string
        } & DefaultSession['user']
    }

    // interface Profile {
    //     username: string
    // }

    interface User {
        id: string;
        name: string;
        password: string;
        role: string | null; // Allow for null values
    } 
}

// declare module 'next-auth/jwt' {
//     interface JWT {
//         username: string
//         access_token?: string
//     }
// }