import { Badge } from '@/components/ui/badge';
import { CardContent } from '@/components/ui/card';
import { getUidWithPrefix, simulateDelay } from '@/utils';

const AccountStatus = async () => {
  await simulateDelay(600);

  return (
    <CardContent className="space-y-3">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Membership</span>
        <Badge variant="info" size="sm">
          Premium
        </Badge>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Loyalty Points</span>
        <span className="font-medium text-primary">2,450</span>
      </div>
      <div className="pt-2 border-t border-border">
        <p className="text-xs text-muted-foreground">
          Earn 1 point for every $1 spent. Redeem points for discounts on future orders.
        </p>
      </div>
    </CardContent>
  );
};

export default AccountStatus;

export function AccountStatusSkeleton() {
  return (
    <CardContent className="space-y-3 animate-pulse mt-1">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={getUidWithPrefix('account-status-skeleton', i)}
          className="h-5 w-full bg-muted rounded"
        />
      ))}
    </CardContent>
  );
}
