import Login from '@/features/authentication/components/login';

const LoginPage = async ({ searchParams }: PageProps<'/login'>) => {
  const { redirectUrl } = await searchParams;

  return <Login redirectUrl={redirectUrl} />;
};

export default LoginPage;
