'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Lock, Mail, User } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import type z from 'zod';
import { Input } from '@/components/ui/form/input';
import PasswordVisibilityToggle from '@/components/ui/form/PasswordVisibilityToggle';
import SubmitButton from '@/components/ui/form/SubmitButton';
import { signupFormSchema } from '@/features/authentication/auth-schema';
import type { SignupFormInputType } from '@/features/authentication/auth-types';

type RegisterFormData = z.infer<typeof signupFormSchema>;

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterFormData>({ resolver: zodResolver(signupFormSchema) });

  const onSubmit: SubmitHandler<SignupFormInputType> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Name Field */}
      <Input
        id="name"
        type="text"
        label="Full Name"
        placeholder="John Doe"
        variant="icon"
        icon={<User className="h-4 w-4" />}
        error={!!errors.name}
        helperText={errors.name?.message}
        {...register('name')}
      />

      {/* Email Field */}
      <Input
        id="email"
        type="email"
        label="Email"
        placeholder="you@example.com"
        icon={<Mail className="h-4 w-4" />}
        variant="icon"
        error={!!errors.email}
        helperText={errors.email?.message}
        {...register('email')}
      />

      {/* Password Field */}
      <Input
        id="password"
        type={showPassword.password ? 'text' : 'password'}
        label="Password"
        placeholder="Create a strong password"
        icon={<Lock className="h-4 w-4" />}
        variant="icon"
        error={!!errors.password}
        helperText={errors.password?.message}
        {...register('password')}
        autoComplete="new-password"
        passwordToggleRender={
          <PasswordVisibilityToggle
            show={showPassword.password}
            onToggle={() => setShowPassword((prev) => ({ ...prev, password: !prev.password }))}
          />
        }
      />

      {/* Confirm Password Field */}
      <Input
        id="confirmPassword"
        label="Confirm Password"
        type={showPassword.confirmPassword ? 'text' : 'password'}
        placeholder="Re-enter your password"
        variant="icon"
        icon={<Lock className="h-4 w-4" />}
        error={!!errors.confirm_password}
        helperText={errors.confirm_password?.message}
        {...register('confirm_password')}
        passwordToggleRender={
          <PasswordVisibilityToggle
            show={showPassword.confirmPassword}
            onToggle={() =>
              setShowPassword((prev) => ({ ...prev, confirmPassword: !prev.confirmPassword }))
            }
          />
        }
      />

      {/* Submit Button */}
      <SubmitButton label="Create Account" />

      {/* Terms */}
      <p className="text-xs text-muted-foreground text-center">
        By signing up, you agree to our{' '}
        <Link href="#" className="text-primary hover:underline">
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link href="#" className="text-primary hover:underline">
          Privacy Policy
        </Link>
      </p>
    </form>
  );
}
