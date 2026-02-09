import { CreditCard, Heart, MapPin, Settings, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const QuickActions = () => (
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
);

export default QuickActions;
