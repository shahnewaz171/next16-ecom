'use server';

import { cookies } from 'next/headers';
import { THEME_COOKIE_NAME, type Theme } from '@/utils/theme';

const setThemeToCookie = async (theme: Theme) => {
  const cookieStore = await cookies();
  cookieStore.set(THEME_COOKIE_NAME, theme);
};

export default setThemeToCookie;
