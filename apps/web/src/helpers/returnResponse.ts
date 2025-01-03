import { NextResponse } from "next/server";

export function returnResponse({
    statusCode,
    message,
    response,
}: {
    statusCode: number;
    message: string;
    response: any;
}) {
    return NextResponse.json({ message, response }, { status: statusCode });
}

export function returnErrorResponse() {
    return NextResponse.json(
        { message: "Access denied!", response: null },
        { status: 403 },
    );
}