'use client';

import { useFeatureFlagVariantKey, usePostHog } from '@posthog/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

const ShopNowButton = () => {
  const flagValue = useFeatureFlagVariantKey('shop-button-test');
  const posthog = usePostHog();

  const onNavigate = () => {
    posthog.capture('Shop Now button clicked');
  };

  return (
    <Link href="/products" onNavigate={onNavigate}>
      {flagValue === 'test' ? (
        <Button
          size="xl"
          variant="gradient"
          icon={<ArrowRight className="h-5 w-5" />}
          iconPosition="right"
        >
          Shop Now
        </Button>
      ) : (
        <Button
          size="xl"
          variant="secondary"
          icon={<ArrowRight className="h-5 w-5" />}
          iconPosition="right"
        >
          Shop Now and get 10% off!
        </Button>
      )}
    </Link>
  );
};

export default ShopNowButton;
