import { redirect } from 'next/navigation';
import { checkUserLoggedIn } from '@/features/authentication/auth-queries';
import Login from '@/features/authentication/components/login';

const LoginPage = async ({ searchParams }: PageProps<'/login'>) => {
  const isLoggedIn = await checkUserLoggedIn();
  const { redirectUrl } = await searchParams;

  if (isLoggedIn) {
    redirect('/products');
  }

  return <Login redirectUrl={redirectUrl} />;
};

export default LoginPage;
