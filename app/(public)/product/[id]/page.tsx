import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { ProductGridSkeleton } from '@/components/ui/skeleton';
import ProductDetails from '@/features/products/components/details/ProductDetails';
import { ProductGrid } from '@/features/products/components/ProductGrid';
import { getProductById, getRelatedProducts } from '@/features/products/product-services';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="py-8">
      <ProductDetails product={product} />

      {/* Related Products */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Related Products</h2>
        <Suspense fallback={<ProductGridSkeleton count={4} />}>
          <RelatedProducts productId={product.id} />
        </Suspense>
      </div>
    </div>
  );
}

async function RelatedProducts({ productId }: { productId: string }) {
  const relatedProducts = await getRelatedProducts(productId);

  return <ProductGrid products={relatedProducts} />;
}
