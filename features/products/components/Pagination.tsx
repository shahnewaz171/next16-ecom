'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import LinkStatus from '@/components/ui/LinkStatus';
import getSearchQuery from '@/features/products/helpers/getSearchQuery';
import type { ProductFilters } from '@/types/product';
import { getUidWithPrefix } from '@/utils';
import { cn } from '@/utils/cn';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  searchParams: ProductFilters;
}

// Show max 7 page numbers
const getVisiblePages = (totalPages: number, currentPage: number, pages: number[]) => {
  if (totalPages <= 7) return pages;

  if (currentPage <= 4) {
    return [...pages.slice(0, 5), '...', totalPages];
  }

  if (currentPage >= totalPages - 3) {
    return [1, '...', ...pages.slice(totalPages - 5)];
  }

  return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
};

export function Pagination({ currentPage, totalPages, searchParams }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Calculate visible pages based on current page and total pages
  const visiblePages = getVisiblePages(totalPages, currentPage, pages);

  if (totalPages <= 1 || currentPage > totalPages || currentPage < 1) return null;

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <Link
        href={getSearchQuery('page', currentPage - 1, searchParams)}
        className={cn(isFirstPage && 'pointer-events-none')}
      >
        <Button variant="outline" size="icon" disabled={isFirstPage}>
          <LinkStatus rootClassName="gap-1" size={16}>
            <ChevronLeft className="h-4 w-4" />
          </LinkStatus>
        </Button>
      </Link>

      {visiblePages.map((page, index) => {
        if (page === '...') {
          return (
            <span key={getUidWithPrefix('ellipsis', index)} className="px-2 text-muted-foreground">
              ...
            </span>
          );
        }

        const isActive = currentPage === page;

        return (
          <Link
            key={page}
            href={getSearchQuery('page', page, searchParams)}
            className={cn(isActive && 'pointer-events-none')}
          >
            <Button variant={isActive ? 'default' : 'outline'} size="icon">
              {page}
            </Button>
          </Link>
        );
      })}

      <Link
        href={getSearchQuery('page', currentPage + 1, searchParams)}
        className={cn(isLastPage && 'pointer-events-none')}
      >
        <Button variant="outline" size="icon" disabled={isLastPage} className="gap-1">
          <LinkStatus rootClassName="gap-1" size={16}>
            <ChevronRight className="h-4 w-4" />
          </LinkStatus>
        </Button>
      </Link>
    </div>
  );
}
