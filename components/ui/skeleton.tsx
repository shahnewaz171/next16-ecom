import { getUidWithPrefix } from '@/utils';
import { cn } from '@/utils/cn';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return <div className={cn('animate-pulse rounded-md bg-muted', className)} {...props} />;
}

export function ProductCardSkeleton() {
  return (
    <div className="rounded-lg border bg-card p-4 shadow-sm">
      <Skeleton className="h-48 w-full mb-4" />
      <Skeleton className="h-6 w-3/4 mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-2/3 mb-4" />
      <div className="flex justify-between items-center">
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-10 w-24" />
      </div>
    </div>
  );
}

export function ProductGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={getUidWithPrefix('product-card-skeleton', i)} />
      ))}
    </div>
  );
}

export function CategoriesSkeleton({ count = 5 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton
          key={getUidWithPrefix('category-skeleton', i)}
          className="h-8 w-full rounded-lg"
        />
      ))}
    </div>
  );
}

export function SortOptionsSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton
          key={getUidWithPrefix('sort-option-skeleton', i)}
          className="h-8 w-full rounded-lg"
        />
      ))}
    </div>
  );
}

export function ShopByCategorySkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={getUidWithPrefix('shop-category-skeleton', i)}
          className="h-24 rounded-lg border bg-muted animate-pulse"
        />
      ))}
    </div>
  );
}
