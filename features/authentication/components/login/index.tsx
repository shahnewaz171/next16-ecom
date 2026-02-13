import { Lock, Mail } from 'lucide-react';
import type { Route } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/form/input';
import SubmitButton from '@/components/ui/form/SubmitButton';
import { submitLoginForm } from '@/features/authentication/auth-actions';

export default function LoginForm({ redirectUrl }: { redirectUrl?: string | string[] }) {
  return (
    <Card variant="elevated">
      <CardContent>
        <form
          action={submitLoginForm.bind(null, 'john.doe@example.com', redirectUrl as Route)}
          className="space-y-6"
        >
          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <div className="relative">
              {/* <input type="hidden" name="email" value="john.doe@example.com" /> */}
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                disabled
                value="john.doe@example.com"
                icon={<Mail className="h-4 w-4" />}
                variant="icon"
                className="disabled:cursor-auto disabled:opacity-100"
              />
            </div>
          </div>
          {/* Password Field */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <Link href="#" className="text-sm text-primary hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              {/* <input type="hidden" name="password" value="password123" /> */}
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                disabled
                value="password123"
                icon={<Lock className="h-4 w-4" />}
                variant="icon"
                autoComplete="new-password"
                className="disabled:cursor-auto disabled:opacity-100"
              />
            </div>
          </div>

          {/* Submit Button */}
          <SubmitButton label="Sign In" />
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-card px-2 text-muted-foreground">or</span>
          </div>
        </div>

        {/* Sign Up Link */}
        <div className="text-center text-sm">
          <span className="text-muted-foreground">Don't have an account? </span>
          <Link href="#" className="text-primary hover:underline font-medium po">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
