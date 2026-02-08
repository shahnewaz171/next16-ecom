import { cookies } from 'next/headers';
import { simulateDelay } from '@/utils';

export const getUserProfile = async () => {
  await simulateDelay(500);

  const userId = (await cookies()).get('user_id')?.value;

  if (!userId) {
    return null;
  }

  return {
    id: userId,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 890',
    address: '123 Main St, Anytown, USA',
    avatar: null,
    birthDate: '1990-01-01',
    gender: 'male'
  };
};
