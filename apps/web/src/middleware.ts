import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


export function middleware(request: NextRequest) {
    const authToken = request.cookies.get('sid')?.value;
    const pathname = request.nextUrl.pathname.split('?')[0]; // Remove query params
    const publicRoutes = ['/', '/login', '/register'];

    const isPublicRoute = publicRoutes.includes(pathname);

    if (!isPublicRoute && !authToken) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    if (authToken) {
        try {
            // const decoded = jwt.verify(authToken, SECRET_KEY);
            // request.headers.set('x-user-id', decoded.id); 
        } catch (error) {
            console.error('Invalid Token:', error);
            return NextResponse.redirect(new URL('/login', request.url));
        }

        if (isPublicRoute) {
            return NextResponse.redirect(new URL('/dashboard', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|api).*)',
    ],
};
