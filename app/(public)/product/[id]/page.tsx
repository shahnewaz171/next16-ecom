import { Home } from 'lucide-react';
import { cacheTag } from 'next/cache';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { ProductGridSkeleton } from '@/components/ui/skeleton';
import ProductDetails, {
  ProductDetailsSkeleton
} from '@/features/products/components/details/ProductDetails';
import { ProductGrid } from '@/features/products/components/ProductGrid';
import { products } from '@/features/products/data/products';
import { getProductById, getRelatedProducts } from '@/features/products/product-services';
import type { Product } from '@/types/product';

const getProductBreadcrumbs = (product: Product) => [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Products', href: '/products' },
  { name: product.category, href: `/products?category=${product.category}` },
  { name: product.name, href: `/product/${product.id}` }
];

export function generateMetadata() {
  return products.map((item) => ({ id: item.id }));
}

export default function ProductPage({ params }: PageProps<'/product/[id]'>) {
  return (
    <div className="py-6 sm:py-8">
      <Suspense fallback={<ProductDetailsSkeleton />}>
        <ProductDetailsWrapper params={params} />
      </Suspense>
    </div>
  );
}

async function ProductDetailsWrapper({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return <ProductDetailsDetails id={id} />;
}

async function ProductDetailsDetails({ id }: { id: string }) {
  'use cache';

  cacheTag(`product-${id}`);

  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  const breadcrumbs = getProductBreadcrumbs(product);

  return (
    <>
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={breadcrumbs} />

      <ProductDetails product={product} />

      {/* Related Products */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Related Products</h2>
        <Suspense fallback={<ProductGridSkeleton count={4} />}>
          <RelatedProducts productId={id} />
        </Suspense>
      </div>
    </>
  );
}

async function RelatedProducts({ productId }: { productId: string }) {
  'use cache';

  cacheTag(`related-${productId}`);

  const relatedProducts = await getRelatedProducts(productId);

  return <ProductGrid products={relatedProducts} />;
}
