import { Card } from '@/components/ui/card';
import { getUidWithPrefix } from '@/utils';

export default function ProfileLoading() {
  return (
    <div>
      <Card variant="elevated" padding="lg">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          {/* Avatar */}
          <div className="flex flex-col items-center gap-3">
            <div className="size-24 rounded-full bg-muted animate-pulse" />
            <div className="h-5 w-20 bg-muted rounded" />
          </div>

          {/* User Info */}
          <div className="flex-1 space-y-4">
            <div>
              <div className="h-6 w-48 bg-muted rounded" />
              <div className="h-4 w-32 bg-muted rounded" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={getUidWithPrefix('profile-info-skeleton', i)}
                  className="h-5 w-full bg-muted rounded"
                />
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-row md:flex-col gap-2">
            <div className="h-8 w-24 bg-muted rounded" />
            <div className="h-8 w-24 bg-muted rounded" />
          </div>
        </div>
      </Card>
    </div>
  );
}
