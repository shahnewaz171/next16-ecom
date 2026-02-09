import Link from 'next/link';
import { Suspense } from 'react';
import TopSearchBar, { TopSearchSkeleton } from '@/components/layouts/TopSearchBar';
import Button from '@/components/ui/Button';
import { CartDrawer } from '@/components/ui/CartDrawer';
import { ThemeToggle, ThemeToggleSkeleton } from '@/components/ui/ThemeToggle';
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
        <div className="flex items-center space-x-4">
          <Suspense fallback={<ThemeToggleSkeleton />}>
            <ThemeToggle />
          </Suspense>

          <Link href="/products">
            <Button variant="ghost" size="sm">
              Products
            </Button>
          </Link>

          {/* card */}
          <CartDrawer />

          {/* user profile */}
          <Suspense fallback={<UserProfileSkeleton />}>
            <UserProfile />
          </Suspense>
        </div>
      </nav>
    </header>
  );
}
