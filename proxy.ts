import { type NextRequest, NextResponse } from 'next/server';

const protectedRoutes = ['/profile'];
const authRoutes = ['/login', '/register'];

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isLoggedIn = request.cookies.get('user_id')?.value;

  const isProtectedRoute = protectedRoutes.includes(pathname);
  const isAuthRoute = authRoutes.includes(pathname);

  // Skip for non-protected and non-auth routes
  if (!isProtectedRoute && !isAuthRoute) {
    return NextResponse.next();
  }

  // Redirect to login if trying to access protected route while not logged in
  if (isProtectedRoute && !isLoggedIn) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirectUrl', pathname);

    return NextResponse.redirect(loginUrl);
  }

  // Redirect to profile if trying to access auth route while logged in
  if (isAuthRoute && isLoggedIn) {
    return NextResponse.redirect(new URL('/profile', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/profile', '/login', '/register']
};
