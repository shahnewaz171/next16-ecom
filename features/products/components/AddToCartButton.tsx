'use client';

import { ShoppingCart } from 'lucide-react';
import type React from 'react';
import Button from '@/components/ui/Button';
import { useCart } from '@/store/context/CartContext';
import type { Product } from '@/types/product';

const AddToCartButton = ({ product }: { product: Product }) => {
  const { addToCart, isInCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Button
      size="icon"
      variant={isInCart(product.id) ? 'success' : 'default'}
      disabled={!product.inStock}
      onClick={handleAddToCart}
    >
      <ShoppingCart className="h-4 w-4" />
    </Button>
  );
};

export default AddToCartButton;
