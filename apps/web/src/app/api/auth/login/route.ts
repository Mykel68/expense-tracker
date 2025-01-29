import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { returnErrorResponse, returnResponse } from '@/helpers/returnResponse';

export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json();

        // Validate required fields
        if (!email || !password) {
            return returnResponse({
                message: "Missing required fields.",
                response: null,
                statusCode: 400,
            });
        }

        // Prepare headers for the external API request
        const headers = {
            "x-api-key": `Bearer ${process.env.X_API_KEY}`,
        };

        const loginData = { email, password };

        // Wait for the response from the external API call
        const response = await axios.post(
            `${process.env.API_URL}/auth/login`,
            loginData,
            { headers }
        );

        console.log("Response from API:", response.data);

        // Assuming the response contains a token
        if (response.status === 200) {
            return returnResponse({
                message: "Login successful",
                response: response.data,
                statusCode: 200,
            });
        } else {
            return returnErrorResponse();
        }

    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                return returnResponse({
                    message: error.response.data.message || 'An error occurred during the API call',
                    response: null,
                    statusCode: error.response.status,
                });
            } else {
                return returnResponse({
                    message: 'Network error, please try again later.',
                    response: null,
                    statusCode: 500,
                });
            }
        } else {
            return returnResponse({
                message: 'Unexpected error occurred',
                response: null,
                statusCode: 500,
            });
        }
    }
}
