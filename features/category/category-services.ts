import { ArrowDownAZ, ArrowUpAZ, DollarSign } from 'lucide-react';
import { cacheTag } from 'next/cache';
import { cache } from 'react';
import type { SortOption } from '@/types/product';
import { simulateDelay } from '@/utils';

export const getCategories = cache(async (hideCategories: string[] = []) => {
  'use cache: remote';
  cacheTag('categories');

  await simulateDelay(750);

  const categories = [
    'All',
    'Accessories',
    'Audio',
    'Electronics',
    'Home',
    'Kitchen',
    'Smart Home',
    'Wearables'
  ];

  return categories.filter((c) => !hideCategories.includes(c));
});

export const getSortOptions = async () => {
  const sortOptions: {
    value: SortOption;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
  }[] = [
    { value: 'asc', label: 'A-Z', icon: ArrowDownAZ },
    { value: 'desc', label: 'Z-A', icon: ArrowUpAZ },
    { value: 'price-low', label: 'Price: Low', icon: DollarSign },
    { value: 'price-high', label: 'Price: High', icon: DollarSign }
  ];

  return sortOptions;
};
