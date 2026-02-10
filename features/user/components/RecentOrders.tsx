import { Package } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { orderStatusVariant } from '@/features/user/helpers';
import { getRecentOrders } from '@/features/user/user-queries';
import { getUidWithPrefix } from '@/utils';

const RecentOrders = async () => {
  'use cache';

  const recentOrders = await getRecentOrders();

  return recentOrders.map((order) => (
    <div
      key={order.id}
      className="flex flex-wrap gap-y-2 items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
    >
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-muted">
          <Package className="size-4 text-muted-foreground" />
        </div>
        <div>
          <p className="text-sm font-medium">{order.id}</p>
          <p className="text-xs text-muted-foreground">
            {order.date} · {order.items} item{order.items > 1 ? 's' : ''}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold">${order.total.toFixed(2)}</span>
        <Badge variant={orderStatusVariant(order.status)} size="sm">
          {order.status}
        </Badge>
      </div>
    </div>
  ));
};

export default RecentOrders;

export function RecentOrdersSkeleton() {
  return (
    <div className="space-y-3 animate-pulse">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={getUidWithPrefix('recent-order-skeleton', i)}
          className="flex items-center justify-between p-3 rounded-lg border border-border"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-muted">
              <Package className="size-4 text-muted-foreground" />
            </div>
            <div className="space-y-2">
              <div className="h-4 w-24 bg-muted rounded" />
              <div className="h-3 w-16 bg-muted rounded" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-5 w-12 bg-muted rounded" />
            <div className="h-5 w-20 bg-muted rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}
