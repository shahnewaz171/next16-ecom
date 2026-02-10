import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { checkUserLoggedIn } from '@/features/authentication/auth-queries';
import { getUserProfile } from '@/features/user/user-queries';

export async function SpecialOfferBanner() {
  const isLoggedIn = await checkUserLoggedIn();

  if (!isLoggedIn) return <GeneralBanner />;

  return <SpecialOfferBannerDetails />;
}

async function SpecialOfferBannerDetails() {
  'use cache';

  const user = await getUserProfile();

  const { first_name } = user || {};

  return (
    <section>
      <Card variant="gradient" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-primary/20 to-accent/20" />
        <div className="relative p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <Badge variant="warning" size="lg" className="mb-4">
                <Sparkles className="h-4 w-4 mr-1" />
                Special Deals
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                {`Welcome Back ${first_name}! Check Your Exclusive Deals`}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                As a valued customer, you have access to special discounts on your favorite
                products. Don't miss out on these exclusive offers!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/products">
                <Button
                  variant="gradient"
                  size="lg"
                  icon={<ArrowRight className="h-5 w-5" />}
                  iconPosition="right"
                >
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}

export function GeneralBanner() {
  return (
    <section>
      <Card variant="gradient" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-primary/20 to-accent/20" />
        <div className="relative p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <Badge variant="warning" size="lg" className="mb-4">
                <Sparkles className="h-4 w-4 mr-1" />
                Exclusive Offer
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Unlock Exclusive Discounts</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Sign up to access special offers on your favorite products and get early access to
                new arrivals
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/login">
                <Button
                  variant="gradient"
                  size="lg"
                  icon={<ArrowRight className="h-5 w-5" />}
                  iconPosition="right"
                >
                  Sign Up Now
                </Button>
              </Link>
              <Link href="/login">
                <Button variant="outline" size="lg">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}

export function GeneralBannerSkeleton() {
  return (
    <section>
      <Card variant="gradient" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-primary/20 to-accent/20" />
        <div className="relative p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start">
              <Skeleton className="h-6 w-40 mb-4" />
              <Skeleton className="h-10 w-80 mb-3" />
              <Skeleton className="h-5 w-full max-w-lg" />
            </div>

            <div className="flex flex-col justify-center sm:flex-row items-center gap-3">
              <Skeleton className="h-12 w-40" />
              <Skeleton className="h-8 w-28" />
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
