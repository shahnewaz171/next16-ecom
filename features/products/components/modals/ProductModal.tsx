'use client';

import { Package, Star, X } from 'lucide-react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import Modal from '@/components/ui/Modal';
import AddToCartButtons from '@/features/products/components/details/AddToCartButtons';
import type { Product } from '@/types/product';

export default function ProductModal({ product }: { product: Product }) {
  const { id, name, description, price, category, image, rating, reviews, inStock } = product;

  const pathName = usePathname();
  const router = useRouter();

  //
  const isOpenModal = pathName === `/product/${id}`;

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal isOpen={isOpenModal} onClose={handleClose}>
      {/* Close button */}
      <button
        type="button"
        onClick={handleClose}
        className="absolute top-4 right-4 z-20 p-2 rounded-full bg-background/80 hover:bg-accent transition-colors"
        aria-label="Close product modal"
      >
        <X className="h-5 w-5" />
      </button>

      <div className="p-6 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
          {/* Product Image */}
          <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-muted">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-4">
            <Badge variant="secondary" size="lg" className="w-fit">
              {category}
            </Badge>

            <h2 className="text-2xl sm:text-3xl font-bold leading-tight">{name}</h2>

            {/* Rating */}
            {rating && (
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-warning text-warning" />
                <span className="font-semibold">{rating.toFixed(1)}</span>
                <span className="text-sm text-muted-foreground">({reviews} reviews)</span>
              </div>
            )}
            <p className="text-muted-foreground leading-relaxed">{description}</p>

            {/* Price */}
            <div className="text-4xl font-bold text-primary">${price.toFixed(2)}</div>

            {/* Stock Status */}
            {inStock ? (
              <Badge variant="success" size="lg" className="w-fit">
                <Package className="h-4 w-4 mr-1" />
                In Stock
              </Badge>
            ) : (
              <Badge variant="destructive" size="lg" className="w-fit">
                Out of Stock
              </Badge>
            )}

            {/* Add to Cart */}
            <AddToCartButtons product={product} />
          </div>
        </div>
      </div>
    </Modal>
  );
}
