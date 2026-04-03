'use client';

import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/store/context/CartContext';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/utils/cn';

const CartDrawerButton = () => {
  const pathname = usePathname();
  const { cart } = useCart();

  return (
    <Link
      href="/cart"
      className={cn('relative cursor-pointer', pathname === '/cart' && 'pointer-events-none')}
    >
      <ShoppingCart className="h-5 w-5" />
      {cart.totalItems > 0 && (
        <div className="absolute -top-2 -right-2">
          <Badge variant="destructive" size="sm">
            {cart.totalItems}
          </Badge>
        </div>
      )}
    </Link>
  );
};

export default CartDrawerButton;
