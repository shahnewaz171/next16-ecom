import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { CardContent } from '@/components/ui/card';
import { simulateDelay } from '@/utils';

const RecommendedProducts = async () => {
  await simulateDelay(1200);

  return (
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
  );
};

export default RecommendedProducts;

export function RecommendedProductsSkeleton() {
  return (
    <CardContent className="animate-pulse">
      <div className="flex items-center justify-center py-8">
        <div className="text-center space-y-3 w-full">
          <div className="size-12 mx-auto bg-muted rounded-full" />
          <div className="h-4 w-48 bg-muted rounded mx-auto" />
          <div className="h-8 w-32 bg-muted rounded mx-auto" />
        </div>
      </div>
    </CardContent>
  );
}
