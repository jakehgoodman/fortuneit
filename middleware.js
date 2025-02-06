import { NextResponse } from 'next/server';

export function middleware(request) {
  // Allow API routes to be handled by Next.js
  if (request.nextUrl.pathname.startsWith('/api/')) {
    return NextResponse.next();
  }

  // Serve index.html for root path
  if (request.nextUrl.pathname === '/') {
    return NextResponse.rewrite(new URL('/index.html', request.url));
  }

  // Serve other static files
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/api/:path*',
    '/((?!_next/static|favicon.ico).*)',
  ],
}; 