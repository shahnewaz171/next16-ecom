import { Package, Shield, Star } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ProductGridSkeleton } from '@/components/ui/skeleton';
import AddToCartButtons from '@/features/products/components/details/AddToCartButtons';
import type { Product } from '@/types/product';

const ProductDetails = ({ product }: { product: Product }) => {
  const { name, description, price, category, image, rating, reviews, inStock } = product;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 mb-10 sm:mb-16">
      {/* Product Image */}
      <div className="relative aspect-square max-h-75 sm:max-h-125 w-full rounded-lg overflow-hidden bg-muted">
        <Image
          src={image}
          alt={name}
          fill
          className="object-initial"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col">
        <Badge variant="secondary" size="lg" className="mb-4 w-fit">
          {category}
        </Badge>

        <h1 className="text-2xl sm:text-4xl font-bold mb-4">{name}</h1>

        {/* Rating */}
        {rating && (
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-warning text-warning" />
              <span className="text-lg font-semibold">{rating.toFixed(1)}</span>
            </div>
            <span className="text-muted-foreground">({reviews} reviews)</span>
          </div>
        )}

        <p className="text-lg text-muted-foreground mb-8">{description}</p>

        {/* Price */}
        <div className="text-3xl sm:text-5xl font-bold text-primary mb-6 sm:mb-8">
          ${price.toFixed(2)}
        </div>

        {/* Stock Status */}
        <div className="mb-8">
          {inStock ? (
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
  );
};

export default ProductDetails;

export function ProductDetailsSkeleton() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 mb-10 sm:mb-16 mt-6">
        {/* Image Skeleton */}
        <div className="relative aspect-square max-h-75 sm:max-h-125 w-full rounded-lg overflow-hidden bg-muted animate-pulse" />

        {/* Info Skeleton */}
        <div className="flex flex-col gap-6">
          <div className="h-8 w-32 bg-muted rounded" />
          <div className="h-12 w-full bg-muted rounded" />
          <div className="h-6 w-20 bg-muted rounded" />
          <div className="h-4 w-full bg-muted rounded" />
          <div className="h-4 w-3/4 bg-muted rounded" />
          <div className="h-10 w-24 bg-muted rounded" />
          <div className="h-8 w-32 bg-muted rounded" />
        </div>
      </div>

      {/* Related Products Skeleton */}
      <div className="mb-8">
        <div className="h-6 w-40 bg-muted rounded mb-4" />
        <ProductGridSkeleton count={4} />
      </div>
    </>
  );
}
