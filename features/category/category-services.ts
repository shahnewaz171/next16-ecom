import { ArrowDownAZ, ArrowUpAZ, DollarSign } from 'lucide-react';
import type { SortOption } from '@/types/product';
import { simulateDelay } from '@/utils';

export const getCategories = async (hideCategories: string[] = []) => {
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
};

export const getSortOptions = async () => {
  await simulateDelay(450);

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
