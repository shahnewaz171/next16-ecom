import Link from 'next/link';
import { connection } from 'next/server';
import { Suspense } from 'react';
import { CategoriesSkeleton, Skeleton } from '@/components/ui/skeleton';
import Categories from '@/features/category/components/Categories';

export default function Footer({ children }: { children: React.ReactNode }) {
  return (
    <>
      <footer className="border-t bg-card mt-auto">
        <div className="container mx-auto px-4 py-12">
          {/* Categories Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <Suspense fallback={<CategoriesSkeleton />}>
              <div className="flex flex-wrap gap-2">
                <Categories />
              </div>
            </Suspense>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-3">Shop</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href={'/products'} className="hover:text-foreground transition-colors">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products?sort=price-low"
                    className="hover:text-foreground transition-colors"
                  >
                    Best Deals
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href={'/'} className="hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href={'/'} className="hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <Suspense fallback={<Skeleton className="h-4 w-32 mx-auto" />}>
              <Copyright />
            </Suspense>
          </div>
        </div>
      </footer>

      {children}
    </>
  );
}

async function Copyright() {
  await connection();

  const currentYear = new Date().getFullYear();

  return <p>© {currentYear} Commerce. All rights reserved.</p>;
}
