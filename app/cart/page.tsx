import { CartDetails } from '@/features/products/components/cart/CartDrawer';

export default function CartPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-6">
      <CartDetails isFromDrawer={false} />
    </div>
  );
}
