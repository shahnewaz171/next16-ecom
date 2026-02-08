'use client';

import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export function SpecialOfferBanner() {
  return (
    <div>
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
    </div>
  );
}
