'use client';

import { ShoppingCart } from 'lucide-react';
import Button from '@/components/ui/Button';
import { useCart } from '@/store/context/CartContext';
import type { Product } from '@/types/product';

const AddToCartButtons = ({ product }: { product: Product }) => {
  const { addToCart, isInCart } = useCart() || {};

  const handleAddToCart = () => {
    addToCart?.(product);
  };

  return (
    <>
      <Button
        size="xl"
        variant={isInCart?.(product.id) ? 'success' : 'gradient'}
        className="flex-1"
        disabled={!product.inStock}
        icon={<ShoppingCart className="h-5 w-5" />}
        onClick={handleAddToCart}
      >
        {isInCart?.(product.id) ? 'Added to Cart' : 'Add to Cart'}
      </Button>
      <Button size="xl" variant="outline" onClick={handleAddToCart} disabled={!product.inStock}>
        Buy Now
      </Button>
    </>
  );
};

export default AddToCartButtons;
