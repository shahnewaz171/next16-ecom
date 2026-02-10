import { Heart, Package, Star, TruckIcon } from 'lucide-react';
import { cookies } from 'next/headers';
import { cache } from 'react';
import { simulateDelay } from '@/utils';

export const getUserProfile = cache(async () => {
  await simulateDelay(600);

  const userId = (await cookies()).get('user_id')?.value;

  if (!userId) {
    return null;
  }

  return {
    id: userId,
    name: 'John Doe',
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 890',
    address: '123 Main St, Anytown, USA',
    avatar: null,
    birthDate: '1990-01-01',
    gender: 'male'
  };
});

export const getRecentOrders = async () => {
  await simulateDelay(700);

  const recentOrders = [
    { id: 'ORD-2026-001', date: 'Feb 5, 2026', total: 149.99, status: 'Delivered', items: 3 },
    { id: 'ORD-2026-002', date: 'Jan 28, 2026', total: 89.5, status: 'In Transit', items: 2 },
    { id: 'ORD-2026-003', date: 'Jan 15, 2026', total: 249.0, status: 'Delivered', items: 1 }
  ];
  return recentOrders;
};

export const getUserStats = async () => {
  await simulateDelay(350);

  const quickStats = [
    { label: 'Orders', value: '12', icon: Package, color: 'text-blue-500' },
    { label: 'Wishlist', value: '8', icon: Heart, color: 'text-pink-500' },
    { label: 'Reviews', value: '5', icon: Star, color: 'text-yellow-500' },
    { label: 'Returns', value: '1', icon: TruckIcon, color: 'text-green-500' }
  ];
  return quickStats;
};
