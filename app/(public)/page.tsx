import { ArrowRight } from 'lucide-react';
import { cacheTag } from 'next/cache';
import Link from 'next/link';
import { Suspense } from 'react';
import Button from '@/components/ui/Button';
import { ProductGridSkeleton, ShopByCategorySkeleton } from '@/components/ui/skeleton';
import {
  GeneralBannerSkeleton,
  SpecialOfferBanner
} from '@/features/authentication/components/SpecialOfferBanner';
import { getCategories } from '@/features/category/category-services';
import { ProductGrid } from '@/features/products/components/ProductGrid';
import { getFeaturedProducts } from '@/features/products/product-services';

export default function HomePage() {
  return (
    <div className="py-8 space-y-16">
      {/* Hero Section */}
      <section className="text-center py-8 sm:py-12">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-gradient">
          Welcome to Commerce
        </h1>
        <p className="text-base sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
          Discover amazing products with our Next.js 16 powered platform featuring partial
          pre-rendering and advanced caching
        </p>
        <div>
          <Link href="/products">
            <Button
              size="xl"
              variant="gradient"
              icon={<ArrowRight className="h-5 w-5" />}
              iconPosition="right"
            >
              Shop Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Special Offer Banner */}
      <Suspense fallback={<GeneralBannerSkeleton />}>
        <SpecialOfferBanner />
      </Suspense>

      {/* Featured Products */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Featured Products</h2>
            <p className="text-muted-foreground">Our top-rated and most popular items</p>
          </div>
          <Link href="/products">
            <Button variant="outline">View All</Button>
          </Link>
        </div>
        <Suspense fallback={<ProductGridSkeleton />}>
          <FeaturedProducts />
        </Suspense>
      </section>

      {/* Categories Grid */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Shop by Category</h2>
        <Suspense fallback={<ShopByCategorySkeleton />}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Categories />
          </div>
        </Suspense>
      </section>
    </div>
  );
}

async function FeaturedProducts() {
  'use cache';

  cacheTag('featured-products');

  const products = await getFeaturedProducts();

  return <ProductGrid products={products} />;
}

async function Categories() {
  const categories = await getCategories(['All']);

  return categories.map((category) => (
    <Link key={category} href={`/products?category=${category}`}>
      <div className="group p-6 rounded-lg border bg-card hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer">
        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
          {category}
        </h3>
        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
          Explore →
        </span>
      </div>
    </Link>
  ));
}
