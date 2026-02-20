import { Skeleton } from '@/components/ui/skeleton';
import { getUidWithPrefix } from '@/utils';

const CartSkeleton = () => (
  <div className="h-full bg-background shadow-xl flex flex-col max-w-md w-full mx-auto">
    {/* Header */}
    <div className="flex items-center justify-between p-6 border-b">
      <div>
        <Skeleton className="w-32 h-6 mb-2" />
        <Skeleton className="w-16 h-4" />
      </div>
      <Skeleton className="w-5 h-5" />
    </div>

    {/* Cart Items */}
    <div className="flex-1 overflow-y-auto p-6 space-y-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={getUidWithPrefix('cart-item', i)} className="flex gap-4 animate-pulse">
          <Skeleton className="w-20 h-20 rounded-md" />
          <div className="flex-1 space-y-2">
            <Skeleton className="w-3/4 h-5" />
            <Skeleton className="w-1/2 h-4" />
            <div className="flex items-center gap-2">
              <Skeleton className="w-6 h-6 rounded" />
              <Skeleton className="w-8 h-5 text-center font-medium" />
              <Skeleton className="w-6 h-6 rounded" />
              <Skeleton className="w-5 h-5 ml-auto" />
            </div>
          </div>
          <Skeleton className="w-16 h-5 text-right font-semibold" />
        </div>
      ))}
    </div>

    {/* Footer */}
    <div className="border-t p-6 space-y-4">
      <Skeleton className="w-full h-6" />
      <Skeleton className="w-full h-10" />
      <Skeleton className="w-full h-10" />
    </div>
  </div>
);

export default CartSkeleton;
