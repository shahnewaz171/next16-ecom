import { Skeleton } from '@/components/ui/skeleton';

export default function ProductModalLoading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 animate-fade-in" aria-hidden="true" />
      {/* Modal Panel Skeleton */}
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-background shadow-2xl p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
          {/* Image Skeleton */}
          <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-muted">
            <Skeleton className="absolute inset-0 w-full h-full" />
          </div>
          {/* Info Skeleton */}
          <div className="flex flex-col gap-4">
            <Skeleton className="w-24 h-7 mb-2" />
            <Skeleton className="w-2/3 h-8 mb-2" />
            <Skeleton className="w-1/3 h-6 mb-2" />
            <Skeleton className="w-full h-4 mb-2" />
            <Skeleton className="w-3/4 h-4 mb-2" />
            <Skeleton className="w-1/2 h-10 mb-2" />
            <Skeleton className="w-1/3 h-8 mb-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
