"use server";

import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';
import { JwtPayload } from 'jsonwebtoken';

interface JWTPayload {
    email: string;
    avatar: string;
    name: string;
}

export default async function isSiggedIn(token?: string) {
    const cookieStore = await cookies();

    // Check if JWT_SECRET is defined
    if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined in the environment variables.');
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    if (token) {
        // Set the token in the cookie
        cookieStore.set('sid', token, {
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: '/',
        });
        return true;
    } else {
        // Get the token from the cookies
        const cookieToken = cookieStore.get('sid')?.value;

        if (cookieToken) {
            try {
                // Verify the token
                const { payload } = await jwtVerify(cookieToken, secret);

                // Extract the payload fields
                const { email, avatar, name } = payload as JwtPayload;

                console.log('Decoded user details from cookies:', { email, avatar, name });

                // Return the decoded payload
                return { email, avatar, name };
            } catch (error) {
                console.error('Invalid token:', error);

                // Delete the invalid token
                cookieStore.delete('sid');
                return false;
            }
        } else {
            console.log('No token found in cookies.');
            return false;
        }
    }
}