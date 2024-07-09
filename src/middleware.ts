import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { parse } from 'cookie';

export function middleware(request: NextRequest) {
  const cookies = parse(request.headers.get('cookie') || '');
  const token = cookies.refresh_token;

  console.log('Middleware executed');
  console.log('Cookies:', cookies);
  console.log('Token:', token);

  if (!token) {
    console.log('No token found, redirecting to /login');
    return NextResponse.redirect(new URL('/login', request.url));
  }

  console.log('Token found, proceeding to next middleware');
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/flightlog/:path*',
    '/create/:path*'
  ], 
};