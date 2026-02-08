import { Package, Shield, Star } from 'lucide-react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ProductGridSkeleton } from '@/components/ui/skeleton';
import AddToCartButtons from '@/features/products/components/details/AddToCartButtons';
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Product Image */}
        <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <Badge variant="secondary" size="lg" className="mb-4 w-fit">
            {product.category}
          </Badge>

          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-warning text-warning" />
                <span className="text-lg font-semibold">{product.rating.toFixed(1)}</span>
              </div>
              <span className="text-muted-foreground">({product.reviews} reviews)</span>
            </div>
          )}

          <p className="text-lg text-muted-foreground mb-8">{product.description}</p>

          {/* Price */}
          <div className="text-5xl font-bold text-primary mb-8">${product.price.toFixed(2)}</div>

          {/* Stock Status */}
          <div className="mb-8">
            {product.inStock ? (
              <Badge variant="success" size="lg">
                <Package className="h-4 w-4 mr-1" />
                In Stock
              </Badge>
            ) : (
              <Badge variant="destructive" size="lg">
                Out of Stock
              </Badge>
            )}
          </div>

          {/* Add to Cart */}
          <div className="flex gap-4 mb-8">
            <AddToCartButtons product={product} />
          </div>
          {/* Features */}
          <Card className="mt-auto">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Shield className="h-5 w-5" />
                <span>2-year warranty included • Free shipping over $50</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

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
