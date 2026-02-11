import Link from 'next/link';
import { Suspense } from 'react';
import Button from '@/components/ui/Button';
import LinkStatus from '@/components/ui/LinkStatus';
import { CategoriesSkeleton, SortOptionsSkeleton } from '@/components/ui/skeleton';
import { getCategories, getSortOptions } from '@/features/category/category-services';
import getSearchQuery from '@/features/products/helpers/getSearchQuery';
import type { ProductFilters as ProductFiltersType } from '@/types/product';
import { cn } from '@/utils/cn';

export function ProductFilters({ searchParams }: { searchParams: ProductFiltersType }) {
  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div>
        <h3 className="text-sm font-semibold mb-3">Categories</h3>
        <div className="w-full">
          <Suspense fallback={<CategoriesSkeleton />}>
            <div className="flex flex-wrap h-auto gap-2 bg-transparent p-0">
              <Categories searchParams={searchParams} />
            </div>
          </Suspense>
        </div>
      </div>

      {/* Sort Options */}
      <div>
        <h3 className="text-sm font-semibold mb-3">Sort By</h3>
        <Suspense fallback={<SortOptionsSkeleton count={4} />}>
          <div className="flex flex-wrap gap-2">
            <SortOptions searchParams={searchParams} />
          </div>
        </Suspense>
      </div>
    </div>
  );
}

async function Categories({ searchParams }: { searchParams: ProductFiltersType }) {
  const categories = await getCategories();

  return categories.map((value) => (
    <Link
      key={value}
      scroll={false}
      href={getSearchQuery('category', value, searchParams)}
      className={cn(
        'relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        searchParams.category === value
          ? 'bg-primary text-primary-foreground pointer-events-none'
          : 'hover:text-foreground'
      )}
    >
      <LinkStatus>{value}</LinkStatus>
    </Link>
  ));
}

async function SortOptions({ searchParams }: { searchParams: ProductFiltersType }) {
  const { sort } = searchParams;
  const options = await getSortOptions();

  return options.map((option) => {
    const { icon: Icon } = option;
    const isActive = sort === option.value;

    return (
      <Link
        key={option.value}
        scroll={false}
        href={getSearchQuery('sort', option.value, searchParams)}
        className={cn(isActive && 'pointer-events-none')}
      >
        <Button
          variant={isActive ? 'default' : 'outline'}
          size="sm"
          icon={<Icon className="h-4 w-4" />}
          iconPosition="left"
        >
          <LinkStatus>{option.label}</LinkStatus>
        </Button>
      </Link>
    );
  });
}
