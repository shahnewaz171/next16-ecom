import { Card } from '@/components/ui/card';
import { getUidWithPrefix } from '@/utils';

export default function ProfileLoading() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl animate-pulse">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <div className="h-8 w-48 bg-muted rounded" />
        <div className="h-4 w-72 bg-muted rounded" />
      </div>

      {/* Profile Card */}
      <Card padding="lg" className="mb-8">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <div className="flex flex-col items-center gap-3">
            <div className="size-24 rounded-full bg-muted" />
            <div className="h-5 w-24 bg-muted rounded-full" />
          </div>
          <div className="flex-1 space-y-4">
            <div className="space-y-2">
              <div className="h-7 w-40 bg-muted rounded" />
              <div className="h-4 w-32 bg-muted rounded" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={getUidWithPrefix('profile-info', i)}
                  className="h-5 w-48 bg-muted rounded"
                />
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={getUidWithPrefix('profile-stat', i)}>
            <div className="flex items-center gap-3 p-4">
              <div className="size-10 bg-muted rounded-lg" />
              <div className="space-y-1">
                <div className="h-6 w-8 bg-muted rounded" />
                <div className="h-3 w-14 bg-muted rounded" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 p-6">
          <div className="space-y-4">
            <div className="h-6 w-36 bg-muted rounded" />
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={getUidWithPrefix('profile-order', i)}
                className="h-16 bg-muted rounded-lg"
              />
            ))}
          </div>
        </Card>
        <div className="space-y-6">
          <Card className="p-6">
            <div className="space-y-3">
              <div className="h-6 w-32 bg-muted rounded" />
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={getUidWithPrefix('profile-action', i)} className="h-8 bg-muted rounded" />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
