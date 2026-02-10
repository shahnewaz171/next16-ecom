import type { ProductFilters as ProductFiltersType } from '@/types/product';

export const formattedSearchParams = (searchParams: ProductFiltersType) => {
  const page = Number.parseInt(String(searchParams.page), 10) || 1;

  return { ...searchParams, page };
};
