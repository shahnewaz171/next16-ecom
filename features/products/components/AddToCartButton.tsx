'use client';

import { ShoppingCart } from 'lucide-react';
import { usePathname } from 'next/navigation';
import type React from 'react';
import HydrationBridge from '@/components/core/HydrationBridge';
import Button from '@/components/ui/Button';
import { verifyAuth } from '@/features/authentication/auth-actions';
import { useCart } from '@/store/context/CartContext';
import type { Product } from '@/types/product';

const AddToCartButton = ({ product }: { product: Product }) => {
  const { addToCart, isInCart } = useCart();
  const pathname = usePathname();

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    await verifyAuth(pathname);
    addToCart(product);
  };

  return (
    <HydrationBridge>
      <Button
        size="icon"
        variant={isInCart(product.id) ? 'success' : 'default'}
        disabled={!product.inStock}
        onClick={handleAddToCart}
      >
        <ShoppingCart className="h-4 w-4" />
      </Button>
    </HydrationBridge>
  );
};

export default AddToCartButton;
