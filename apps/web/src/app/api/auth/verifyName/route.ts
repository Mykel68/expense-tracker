import { returnErrorResponse, returnResponse } from "@/helpers/returnResponse";
import axios from "axios";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    try {
        // Extract and validate the name from the request body
        const { name } = await request.json();
        if (!name || typeof name !== "string" || name.trim() === "") {
            return returnResponse({
                message: "A valid name is required.",
                response: null,
                statusCode: 400,
            });
        }

        // Prepare request data and headers
        const registerData = { name };
        const headers = {
            "x-api-key": process.env.X_API_KEY,
        };

        // Send request to the backend API
        const apiUrl = process.env.API_URL;
        const response = await axios.post(`${apiUrl}/auth/verifyName`, registerData, { headers });

        // Handle successful response from the backend API
        if (response.status === 200) {
            return returnResponse({
                message: "Name is available.",
                response: response.data,
                statusCode: 200,
            });
        } else if (response.status === 208) {
            return returnResponse({
                message: "Name is taken.",
                response: response.data,
                statusCode: 208,
            });;
        }

        // Handle unexpected response status
        return returnErrorResponse();
    } catch (error) {
        // Handle Axios errors
        if (axios.isAxiosError(error)) {
            const statusCode = error.response?.status || 500;
            const errorMessage = error.response?.data?.message || "An error occurred with the API.";
            return returnResponse({
                message: errorMessage,
                response: null,
                statusCode,
            });
        }

        // Handle generic errors
        return returnResponse({
            message: "An unexpected error occurred.",
            response: null,
            statusCode: 500,
        });
    }
}
