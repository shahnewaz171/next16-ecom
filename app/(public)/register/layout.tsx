import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

export default function RegisterLayout({ children }: LayoutProps<'/register'>) {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gradient mb-2">Create Account</h1>
          <p className="text-muted-foreground">Join us and unlock exclusive offers</p>
        </div>

        {/* Signup Card */}
        <Card variant="elevated">
          <CardContent>
            {children}

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-card px-2 text-muted-foreground">or</span>
              </div>
            </div>

            {/* Login Link */}
            <div className="text-center text-sm">
              <span className="text-muted-foreground">Already have an account? </span>
              <Link href="/login" className="text-primary hover:underline font-medium">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
