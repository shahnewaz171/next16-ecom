import { Suspense } from 'react';
import { CategoriesSkeleton, Skeleton, SortOptionsSkeleton } from '@/components/ui/skeleton';
import ProductsWrapper, {
  ProductListSkeleton
} from '@/features/products/components/ProductsWrapper';
import type { ProductFilters as ProductFiltersType } from '@/types/product';
import { cn } from '@/utils/cn';

type SearchParams = Promise<ProductFiltersType>;

export default function ProductsPage({ searchParams }: { searchParams: SearchParams }) {
  return (
    <Suspense
      fallback={
        <div className="mb-8">
          <ProductFiltersSkeleton className="mb-8" />
          <ProductListSkeleton />
        </div>
      }
    >
      <ProductsWrapper searchParams={searchParams} />
    </Suspense>
  );
}

function ProductFiltersSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn('space-y-6', className)}>
      {/* Category Filter */}
      <div>
        <h3 className="text-sm font-semibold mb-3">
          <Skeleton className="h-4 w-1/4" />
        </h3>
        <CategoriesSkeleton count={6} />
      </div>

      {/* Sort Options */}
      <div>
        <h3 className="text-sm font-semibold mb-3">
          <Skeleton className="h-4 w-1/4" />
        </h3>
        <SortOptionsSkeleton count={4} />
      </div>
    </div>
  );
}
