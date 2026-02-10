'use server';

import type { Route } from 'next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { cache } from 'react';
import { checkUserLoggedIn } from '@/features/authentication/auth-queries';
import { simulateDelay } from '@/utils';

export const submitLoginForm = async (_email: string, redirectUrl: string) => {
  await simulateDelay();

  //   const payload = {
  //     email: formData.get('email'),
  //     password: formData.get('password')
  //   };

  //   if (email) {
  //     unauthorized();
  //   }

  const cookieStore = await cookies();

  cookieStore.set('user_id', crypto.randomUUID());
  redirect((redirectUrl || '/profile') as Route);
};

export const verifyAuth = cache(async (redirectUrl?: string) => {
  const isLoggedIn = await checkUserLoggedIn();

  if (!isLoggedIn) {
    const loginPath = redirectUrl ? `/login?redirectUrl=${redirectUrl}` : '/login';
    redirect(loginPath as Route);
  }

  return isLoggedIn;
});

export const logout = async () => {
  const cookieStore = await cookies();
  cookieStore.delete('user_id');
  redirect('/login');
};
