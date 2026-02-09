import {
  Calendar,
  CreditCard,
  Heart,
  Mail,
  MapPin,
  Package,
  Phone,
  Settings,
  ShoppingBag,
  Star,
  TruckIcon,
  UserRound
} from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MotionDiv, MotionSection } from '@/components/ui/Motion';
import LogoutButton from '@/features/authentication/components/LogoutButton';
import { getUserProfile } from '@/features/user/user-queries';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } }
};

// Quick stats for the user dashboard
const quickStats = [
  { label: 'Orders', value: '12', icon: Package, color: 'text-blue-500' },
  { label: 'Wishlist', value: '8', icon: Heart, color: 'text-pink-500' },
  { label: 'Reviews', value: '5', icon: Star, color: 'text-yellow-500' },
  { label: 'Returns', value: '1', icon: TruckIcon, color: 'text-green-500' }
];

// Recent orders mock data
const recentOrders = [
  {
    id: 'ORD-2026-001',
    date: 'Feb 5, 2026',
    total: 149.99,
    status: 'Delivered',
    items: 3
  },
  {
    id: 'ORD-2026-002',
    date: 'Jan 28, 2026',
    total: 89.5,
    status: 'In Transit',
    items: 2
  },
  {
    id: 'ORD-2026-003',
    date: 'Jan 15, 2026',
    total: 249.0,
    status: 'Delivered',
    items: 1
  }
];

const orderStatusVariant = (
  status: string
): 'success' | 'info' | 'warning' | 'destructive' | 'secondary' => {
  switch (status) {
    case 'Delivered':
      return 'success';
    case 'In Transit':
      return 'info';
    case 'Processing':
      return 'warning';
    case 'Cancelled':
      return 'destructive';
    default:
      return 'secondary';
  }
};

export default async function ProfilePage() {
  const user = await getUserProfile();

  if (!user) return <ProfileNotFound />;

  const memberSince = new Date(user.birthDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Page Header */}
      <MotionDiv
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gradient">My Account</h1>
        <p className="text-muted-foreground mt-1">Manage your profile and view your activity</p>
      </MotionDiv>

      <MotionDiv variants={stagger} initial="initial" animate="animate" className="space-y-8">
        {/* Profile Card */}
        <MotionDiv variants={fadeUp}>
          <Card variant="elevated" padding="lg">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Avatar */}
              <div className="flex flex-col items-center gap-3">
                <div className="relative">
                  <div className="size-24 rounded-full bg-linear-to-br from-primary/30 to-accent/30 flex items-center justify-center ring-4 ring-primary/20">
                    <UserRound className="size-12 text-primary" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 size-6 rounded-full bg-(--success) border-2 border-background" />
                </div>
                <Badge variant="info" size="sm">
                  Premium Member
                </Badge>
              </div>

              {/* User Info */}
              <div className="flex-1 space-y-4">
                <div>
                  <h2 className="text-2xl font-bold">{user.name}</h2>
                  <p className="text-muted-foreground text-sm">Customer ID: {user.id}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="size-4 text-primary" />
                    <span>{user.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="size-4 text-primary" />
                    <span>{user.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="size-4 text-primary" />
                    <span>{user.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="size-4 text-primary" />
                    <span>Born {memberSince}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-row md:flex-col gap-2">
                <Button variant="outline" size="sm" icon={<Settings className="size-4" />}>
                  Edit Profile
                </Button>
                <LogoutButton />
              </div>
            </div>
          </Card>
        </MotionDiv>

        {/* Quick Stats */}
        <MotionDiv variants={fadeUp}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickStats.map((stat) => (
              <Card key={stat.label} hover="lift" className="cursor-pointer">
                <CardContent className="flex items-center gap-3 p-4">
                  <div className={`p-2 rounded-lg bg-muted ${stat.color}`}>
                    <stat.icon className="size-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </MotionDiv>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Orders */}
          <MotionDiv variants={fadeUp} className="lg:col-span-2">
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
                  {recentOrders.map((order) => (
                    <div
                      key={order.id}
                      className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-muted">
                          <Package className="size-4 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{order.id}</p>
                          <p className="text-xs text-muted-foreground">
                            {order.date} · {order.items} item{order.items > 1 ? 's' : ''}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold">${order.total.toFixed(2)}</span>
                        <Badge variant={orderStatusVariant(order.status)} size="sm">
                          {order.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </MotionDiv>

          {/* Sidebar */}
          <MotionDiv variants={fadeUp} className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/products" className="block">
                  <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
                    <ShoppingBag className="size-4" />
                    Browse Products
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
                  <Heart className="size-4" />
                  My Wishlist
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
                  <CreditCard className="size-4" />
                  Payment Methods
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
                  <MapPin className="size-4" />
                  Saved Addresses
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
                  <Settings className="size-4" />
                  Account Settings
                </Button>
              </CardContent>
            </Card>

            {/* Account Info */}
            <Card variant="gradient">
              <CardHeader>
                <CardTitle className="text-lg">Account Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Membership</span>
                  <Badge variant="info" size="sm">
                    Premium
                  </Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Gender</span>
                  <span className="capitalize font-medium">{user.gender}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Loyalty Points</span>
                  <span className="font-medium text-primary">2,450</span>
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    Earn 1 point for every $1 spent. Redeem points for discounts on future orders.
                  </p>
                </div>
              </CardContent>
            </Card>
          </MotionDiv>
        </div>

        {/* Recommended Section */}
        <MotionSection variants={fadeUp}>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Star className="size-5 text-yellow-500" />
                Recommended For You
              </CardTitle>
              <CardDescription>Based on your recent activity and purchase history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center py-8 text-muted-foreground">
                <div className="text-center space-y-3">
                  <ShoppingBag className="size-12 mx-auto text-muted-foreground/50" />
                  <p className="text-sm">Keep shopping to get personalized recommendations!</p>
                  <Link href="/products">
                    <Button variant="gradient" size="sm">
                      Explore Products
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </MotionSection>
      </MotionDiv>
    </div>
  );
}

function ProfileNotFound() {
  return (
    <div className="h-[calc(100vh-50vh)] flex flex-col items-center justify-center text-center gap-4">
      <h2 className="text-2xl font-bold text-gradient">Profile Not Found</h2>
      <p className="text-muted-foreground mt-2">
        We couldn't load your profile information. Please try again later.
      </p>
      <Link href="/products">
        <Button variant="outline" size="sm" className="mt-4">
          Browse Products
        </Button>
      </Link>
    </div>
  );
}
