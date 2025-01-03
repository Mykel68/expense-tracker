import { NextRequest } from 'next/server';
import axios from 'axios';
import { cookies } from 'next/headers';
import { returnErrorResponse, returnResponse } from '@/helpers/returnResponse';

export async function POST(req: NextRequest) {
    try {
        const { credential, password, did } = await req.json();

        // Validate required fields
        if (!credential || !password) {
            return returnResponse({
                message: "Missing required fields.",
                response: null,
                statusCode: 400,
            });
        }

        let response;
        const headers = {
            Authorization: `Bearer ${process.env.AUTH_API_KEY}`,
        };

        // Determine login logic based on 'did'
        const loginData = { credential, password };
        if (did) {
            try {
                // Authenticated user login with did
                response = await axios.post(
                    `${process.env.API_URL}/auth/login`,
                    { ...loginData, token: did },
                    { headers }
                );
            } catch (error) {
                return returnErrorResponse();
            }
        }

        if (response.status === 200) {
            const token = response.data.user.token;
            cookies().set("pid", token, {
                path: "/",
                maxAge: 5 * 60 * 60, // 5 hours
                // httpOnly: true,
            });

            if (did) {
                return returnResponse({
                    message: "Login successful",
                    response: {
                        token,
                        url: `${response.data.user.url}?rid=${token}`,
                    },
                    statusCode: 200,
                });
            } else {
                return returnResponse({
                    message: "Login successful",
                    response: {
                        token,
                        url: "/dashboard",
                    },
                    statusCode: 200,
                });
            }
        } else {
            return returnResponse({
                message: 'Login failed',
                response: null,
                statusCode: response.status,
            });
        }

    } catch (error) {
        console.error('API Error:', error);
        if (axios.isAxiosError(error)) {
            if (error.response) {
                return returnResponse({
                    message: error.response.data.message || 'An error occurred',
                    response: null,
                    statusCode: error.response.status,
                });
            } else {
                return returnResponse({
                    message: 'Network error',
                    response: null,
                    statusCode: 500,
                });
            }
        } else {
            return returnResponse({
                message: 'Unexpected error',
                response: null,
                statusCode: 500,
            });
        }
    }
}