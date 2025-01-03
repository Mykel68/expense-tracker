import { NextRequest } from 'next/server';

export async function getPidFromCookies(request: NextRequest) {
    const cookies = request.cookies;
    const pid = cookies.get('pid');

    if (!pid) {
        throw new Error("Token not found in cookies");
    }

    return pid;
}