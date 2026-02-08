import { ProductGridSkeleton } from '@/components/ui/skeleton';

export default function ProductsLoading() {
  return (
    <div className="py-8">
      <div className="mb-8">
        <div className="h-10 w-64 bg-muted animate-pulse rounded mb-2" />
        <div className="h-6 w-96 bg-muted animate-pulse rounded" />
      </div>

      <ProductGridSkeleton count={12} />
    </div>
  );
}
