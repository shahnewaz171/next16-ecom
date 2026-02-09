import Link from 'next/link';
import { Suspense } from 'react';
import TopSearchBar, { TopSearchSkeleton } from '@/components/layouts/TopSearchBar';
import Button from '@/components/ui/Button';
import { CartDrawer } from '@/components/ui/CartDrawer';
import { ThemeToggle, ThemeToggleSkeleton } from '@/components/ui/ThemeToggle';
import { checkUserLoggedIn } from '@/features/authentication/auth-queries';
import UserProfile, { UserProfileSkeleton } from '@/features/user/components/UserProfile';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-gradient">Commerce</div>
        </Link>

        {/* Search Bar - Desktop */}
        <Suspense fallback={<TopSearchSkeleton />}>
          <TopSearchBar />
        </Suspense>

        {/* Actions */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Suspense fallback={<ThemeToggleSkeleton />}>
            <ThemeToggle />
          </Suspense>

          <Link href="/products" className="hidden sm:block">
            <Button variant="ghost" size="sm">
              Products
            </Button>
          </Link>

          {/* cart */}
          <Suspense fallback={<CartDrawerButtonSkeleton />}>
            <CartDrawerButtonWrapper />
          </Suspense>

          {/* user profile */}
          <Suspense fallback={<UserProfileSkeleton />}>
            <UserProfile />
          </Suspense>
        </div>
      </nav>
    </header>
  );
}

async function CartDrawerButtonWrapper() {
  const isLoggedIn = await checkUserLoggedIn();

  if (!isLoggedIn) return null;

  return <CartDrawer />;
}

function CartDrawerButtonSkeleton() {
  return (
    <div className="relative">
      <div className="w-5 h-5 bg-muted rounded animate-pulse" />
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-destructive rounded-full animate-pulse" />
    </div>
  );
}
