"use server";
import * as jwt from "jsonwebtoken";

const hashKey = process.env.HASH_KEY!;

export async function hashToken(): Promise<string> {
    return jwt.sign(Date.now().toString(), hashKey);
}

export async function verifyToken(headers: { [k: string]: string }) {
    try {
        const cipherText = headers["ssh"];
        if (!cipherText) {
            throw new Error("ssh header is missing or empty");
        }
        // console.log("Received ssh token:", cipherText);
        const timestamp1 = parseInt(jwt.verify(cipherText, hashKey) as string);

        if (!timestamp1) {
            throw new Error("Invalid token, NaN");
        }

        const timestamp2 = Date.now();

        // Calculate the difference between the timestamps
        const differenceInSeconds = Math.abs(timestamp2 - timestamp1) / 1000;
        console.log(differenceInSeconds);

        return differenceInSeconds < parseInt(process.env.EXPECTED_REQUEST_TIME!);
    } catch (err) {
        console.log(err);
        return false;
    }
}