import { Suspense } from 'react';
import { ProductGridSkeleton, Skeleton } from '@/components/ui/skeleton';
import { Pagination } from '@/features/products/components/Pagination';
import { ProductFilters } from '@/features/products/components/ProductFilters';
import { ProductGrid } from '@/features/products/components/ProductGrid';
import { formattedSearchParams } from '@/features/products/helpers';
import { getProducts } from '@/features/products/product-services';
import type { ProductFilters as ProductFiltersType } from '@/types/product';

type SearchParams = Promise<ProductFiltersType>;

export default async function ProductsWrapper({ searchParams }: { searchParams: SearchParams }) {
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

export function ProductListSkeleton() {
  return (
    <>
      <div className="mb-4 text-sm text-muted-foreground">
        <Skeleton className="h-4 w-1/3" />
      </div>

      <ProductGridSkeleton count={8} />
    </>
  );
}
