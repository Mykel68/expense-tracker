import axios, { AxiosError } from "axios";
import { returnErrorResponse, returnResponse } from "@/helpers/returnResponse";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { getPidFromCookies } from "@/helpers/authConfig";
import { verifyToken } from "@/helpers/jwtSecretGenerator";
import { useMemo } from "react";

export async function POST(request: NextRequest) {
    const { email, password, name } = await request.json();
    try {
        // const pid = await getPidFromCookies(request);
        // const headers = Object.fromEntries(request.headers.entries());

        // if (!(await verifyToken(headers))) {
        //     return returnErrorResponse();
        // }

        const registerData = { email, password, name };

        const headers = {
            "x-api-key": `Bearer ${process.env.X_API_KEY}`,
        };

        const apiUrl = process.env.API_URL;
        const response = await axios.post(`${apiUrl}/auth/register`, registerData, { headers });

        console.log("Response from API:", response);

        if (response.status === 201) {
            return returnResponse({
                message: "Registration successful",
                response: response.data,
                statusCode: 200,
            });
        } else {
            return returnResponse({
                message: "Registration failed",
                response: response.data,
                statusCode: 400,
            });
        }
    } catch (e) {
        const response = (e as AxiosError<{ message: string }>).response;
        return returnResponse({
            message: response?.data?.message || "An error occurred!",
            response: null,
            statusCode: response?.status || 500,
        });
    }
}