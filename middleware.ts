import { NextRequest, NextResponse } from 'next/server';
import { withAttributionCookie } from '@/lib/attribution';

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

  // Los anuncios aterrizan aquí pero el alta ocurre en app.cakely.es: la
  // cookie se escribe en `.cakely.es` para que la app la pueda leer.
  withAttributionCookie(request, response);

  return response;
}

export const config = {
  matcher: [
    '/((?!api/|monitoring|_next/static|_next/image|favicon.ico|img/).*)',
  ],
};
