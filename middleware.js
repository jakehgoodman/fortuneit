import { NextResponse } from 'next/server';

export function middleware(request) {
  // If requesting the root, serve index.html
  if (request.nextUrl.pathname === '/') {
    return NextResponse.rewrite(new URL('/index.html', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
} 