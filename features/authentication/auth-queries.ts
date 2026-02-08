import { cookies } from 'next/headers';

export const checkUserLoggedIn = async () => {
  const userId = (await cookies()).get('user_id')?.value;

  return !!userId;
};
