import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const refreshToken = request.cookies.get('refreshToken')

  if (request.nextUrl.pathname.startsWith('/conversion') && !refreshToken) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (
    (request.nextUrl.pathname.startsWith('/login') ||
      request.nextUrl.pathname.startsWith('/register')) &&
    refreshToken
  ) {
    return NextResponse.redirect(new URL('/conversion/dashboard', request.url))
  }
}

export const config = {
  matcher: ['/conversion/:path*', '/login/:path*', '/register/:path*'],
}
