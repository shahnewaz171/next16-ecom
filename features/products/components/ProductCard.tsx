import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import AddToCartButton from '@/features/products/components/AddToCartButton';
import type { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div>
      <Link href={`/product/${product.id}`}>
        <Card
          variant="elevated"
          hover="lift"
          className="h-full overflow-hidden group cursor-pointer"
        >
          {/* Image */}
          <div className="relative aspect-square h-50 w-full overflow-hidden bg-muted">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {!product.inStock && (
              <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                <Badge variant="destructive">Out of Stock</Badge>
              </div>
            )}
          </div>

          <CardContent className="p-4">
            {/* Category Badge */}
            <Badge variant="secondary" size="sm" className="mb-2">
              {product.category}
            </Badge>

            {/* Product Name */}
            <h3 className="font-semibold text-lg mb-2 line-clamp-1 group-hover:text-primary transition-colors">
              {product.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{product.description}</p>

            {/* Rating */}
            {product.rating && (
              <div className="flex items-center gap-1 mb-2">
                <Star className="h-4 w-4 fill-warning text-warning" />
                <span className="text-sm font-medium">{product.rating.toFixed(1)}</span>
                <span className="text-xs text-muted-foreground">({product.reviews} reviews)</span>
              </div>
            )}
          </CardContent>

          <CardFooter className="p-4 pt-0 flex items-center justify-between">
            {/* Price */}
            <div className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</div>

            {/* Add to Cart Button */}
            <AddToCartButton product={product} />
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
}
