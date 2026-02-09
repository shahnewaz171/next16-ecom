import { ShoppingBag, Star } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AccountStatus, { AccountStatusSkeleton } from '@/features/user/components/AccountStatus';
import QuickActions from '@/features/user/components/QuickActions';
import QuickStats, { QuickStatsSkeleton } from '@/features/user/components/QuickStats';
import RecentOrders, { RecentOrdersSkeleton } from '@/features/user/components/RecentOrders';
import RecommendedProducts, {
  RecommendedProductsSkeleton
} from '@/features/user/components/RecommendedProducts';

const PrivateLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <div className="container mx-auto px-4 py-8 max-w-6xl">
    {/* Page Header */}
    <div className="mb-6 sm:mb-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gradient">My Account</h1>
      <p className="text-sm sm:text-base text-muted-foreground mt-1">
        Manage your profile and view your activity
      </p>
    </div>

    <div className="space-y-8">
      {/* Profile Card */}
      {children}

      {/* Quick Stats */}
      <Suspense fallback={<QuickStatsSkeleton />}>
        <QuickStats />
      </Suspense>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="lg:col-span-2">
          <Card padding="none">
            <CardHeader className="p-6 pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <ShoppingBag className="size-5 text-primary" />
                    Recent Orders
                  </CardTitle>
                  <CardDescription>Your latest purchases</CardDescription>
                </div>
                <Link href="/products">
                  <Button variant="ghost" size="sm">
                    View All
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <div className="space-y-3">
                <Suspense fallback={<RecentOrdersSkeleton />}>
                  <RecentOrders />
                </Suspense>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <QuickActions />

          {/* Account Info */}
          <Card variant="gradient">
            <CardHeader>
              <CardTitle className="text-lg">Account Status</CardTitle>
            </CardHeader>
            <Suspense fallback={<AccountStatusSkeleton />}>
              <AccountStatus />
            </Suspense>
          </Card>
        </div>
      </div>

      {/* Recommended Section */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Star className="size-5 text-yellow-500" />
              Recommended For You
            </CardTitle>
            <CardDescription>Based on your recent activity and purchase history</CardDescription>
          </CardHeader>
          <Suspense fallback={<RecommendedProductsSkeleton />}>
            <RecommendedProducts />
          </Suspense>
        </Card>
      </section>
    </div>
  </div>
);

export default PrivateLayout;
