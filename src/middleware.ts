import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
    const user = req.cookies.get('Authorization')?.value;
    const isLoginPage = req.nextUrl.pathname === '/';


    // if (!user) {
    //     if (isLoginPage) {
    //         return NextResponse.next();
    //     }
    //     return NextResponse.redirect(new URL('/', req.url));
    // }

    // if (isLoginPage) {
    //     return NextResponse.redirect(new URL('/dashboard', req.url));
    // }
}

export const config = {
    matcher: ['/dashboard', '/'],
}