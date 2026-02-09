import { Home } from 'lucide-react';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { ProductGridSkeleton } from '@/components/ui/skeleton';
import ProductDetails from '@/features/products/components/details/ProductDetails';
import { ProductGrid } from '@/features/products/components/ProductGrid';
import { getProductById, getRelatedProducts } from '@/features/products/product-services';
import type { Product } from '@/types/product';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

const getProductBreadcrumbs = (product: Product) => [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Products', href: '/products' },
  { name: product.category, href: `/products?category=${product.category}` },
  { name: product.name, href: `/product/${product.id}` }
];

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  const breadcrumbs = getProductBreadcrumbs(product);

  return (
    <div className="py-6 sm:py-8">
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={breadcrumbs} />

      <ProductDetails product={product} />

      {/* Related Products */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Related Products</h2>
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
