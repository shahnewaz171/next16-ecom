'use client';

import { Search } from 'lucide-react';
import type { Route } from 'next';
import { useRouter, useSearchParams } from 'next/navigation';
import { createSerializer, parseAsString } from 'nuqs';
import type React from 'react';
import { useTransition } from 'react';
import { Input } from '@/components/ui/form/input';
import { Skeleton } from '@/components/ui/skeleton';
import { debounce } from '@/utils';

const serialize = createSerializer({
  search: parseAsString.withDefault('')
});

const TopSearchBar = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get('search') || '';

  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const debounceSearch = debounce((value: string) => {
    startTransition(() => {
      const url = serialize('/products', { search: value.trimEnd() });
      router.push(url as Route, { scroll: false });
    });
  }, 300);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value.startsWith(' ')) return;

    debounceSearch(value);
  };

  return (
    <div className="hidden md:flex flex-1 max-w-md mx-8">
      <div className="relative w-full">
        <Input
          type="search"
          placeholder="Search products..."
          defaultValue={search}
          isLoading={isPending}
          onChange={handleChange}
          variant="icon"
          icon={<Search className="h-4 w-4" />}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default TopSearchBar;

export function TopSearchSkeleton() {
  return (
    <div className="hidden md:block flex-1 max-w-md mx-8">
      <div className="relative h-10 border rounded-md animate-pulse">
        <Skeleton className="absolute top-1/2 left-3 -translate-y-1/2 size-3.5" />
        <div className="absolute top-1/2 left-9 -translate-y-1/2 text-muted-foreground text-sm">
          Loading...
        </div>
      </div>
    </div>
  );
}
