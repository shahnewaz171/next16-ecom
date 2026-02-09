'use server';

import type { Route } from 'next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
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

export const logout = async () => {
  const cookieStore = await cookies();
  cookieStore.delete('user_id');
  redirect('/login');
};
