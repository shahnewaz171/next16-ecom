import { Suspense } from 'react';
import { ProductGridSkeleton } from '@/components/ui/skeleton';
import { Pagination } from '@/features/products/components/Pagination';
import { ProductFilters } from '@/features/products/components/ProductFilters';
import { ProductGrid } from '@/features/products/components/ProductGrid';
import { getProducts } from '@/features/products/product-services';
import type { ProductFilters as ProductFiltersType } from '@/types/product';

type SearchParams = Promise<ProductFiltersType>;

export default async function ProductsPage(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;

  const page = Number.parseInt(String(searchParams.page), 10) || 1;
  const formattedSearchParams = { ...searchParams, page };

  return (
    <div className="py-8">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">All Products</h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Discover our complete collection of premium products
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8">
        <ProductFilters searchParams={formattedSearchParams} />
      </div>

      {/* Products Grid */}
      <Suspense fallback={<ProductGridSkeleton count={12} />}>
        <ProductList searchParams={formattedSearchParams} />
      </Suspense>
    </div>
  );
}

async function ProductList({ searchParams }: { searchParams: ProductFiltersType }) {
  const { category, sort, page, search } = searchParams;
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
