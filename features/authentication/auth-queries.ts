import { cookies } from 'next/headers';
import { cache } from 'react';

export const checkUserLoggedIn = cache(async () => {
  const userId = (await cookies()).get('user_id')?.value;

  return !!userId;
});
