import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const country = request.headers.get('x-vercel-ip-country');
  if (country) {
    response.cookies.set('user-country', country, {
      path: '/',
      maxAge: 60 * 60 * 24 * 30, // 30 days
      sameSite: 'lax',
    });
  }

  return response;
}

export const config = {
  matcher: ['/((?!api/|monitoring|_next/static|_next/image|favicon.ico|img/).*)'],
};
