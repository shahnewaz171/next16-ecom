import { Suspense } from 'react';
import {
  CategoriesSkeleton,
  ProductGridSkeleton,
  Skeleton,
  SortOptionsSkeleton
} from '@/components/ui/skeleton';
import { Pagination } from '@/features/products/components/Pagination';
import { ProductFilters } from '@/features/products/components/ProductFilters';
import { ProductGrid } from '@/features/products/components/ProductGrid';
import { formattedSearchParams } from '@/features/products/helpers';
import { getProducts } from '@/features/products/product-services';
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

async function ProductsWrapper({ searchParams }: { searchParams: SearchParams }) {
  const urlSearchParams = await searchParams;

  const params = formattedSearchParams(urlSearchParams);

  return (
    <>
      {/* Filters */}
      <div className="mb-8">
        <ProductFilters searchParams={params} />
      </div>

      {/* Products Grid */}
      <Suspense fallback={<ProductListSkeleton />}>
        <ProductList searchParams={params} />
      </Suspense>
    </>
  );
}

async function ProductList({ searchParams }: { searchParams: ProductFiltersType }) {
  'use cache';

  const { category, sort, search, page } = searchParams;
  const productsData = await getProducts({ category, search, sort, page });
  const { products = [], totalProducts, currentPage, totalPages } = productsData;

  return (
    <>
      <div className="mb-4 text-sm text-muted-foreground">
        Showing {products.length} of {totalProducts} products
      </div>

      <ProductGrid products={products} />

      {/* Pagination */}
      <Pagination currentPage={currentPage} totalPages={totalPages} searchParams={searchParams} />
    </>
  );
}

function ProductListSkeleton() {
  return (
    <>
      <div className="mb-4 text-sm text-muted-foreground">
        <Skeleton className="h-4 w-1/3" />
      </div>

      <ProductGridSkeleton count={8} />
    </>
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
