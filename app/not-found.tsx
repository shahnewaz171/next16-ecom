import { Home, Search } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-9xl font-bold text-gradient">404</h1>
          <h2 className="text-3xl font-semibold">Page Not Found</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have been moved or
            deleted.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Link href="/">
            <Button variant="gradient" icon={<Home className="h-4 w-4" />}>
              Go Home
            </Button>
          </Link>
          <Link href="/products">
            <Button variant="outline" icon={<Search className="h-4 w-4" />}>
              Browse Products
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
