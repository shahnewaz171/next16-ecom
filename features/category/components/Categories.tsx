import { cacheTag } from 'next/cache';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import LinkStatus from '@/components/ui/LinkStatus';
import { getCategories } from '@/features/category/category-services';

const Categories = async () => {
  'use cache';

  cacheTag('categories');

  const categories = await getCategories(['All']);

  return categories.map((category) => (
    <Link key={category} href={`/products?category=${category}`}>
      <Badge
        variant="outline"
        size="lg"
        clickable={true}
        className="hover:bg-primary hover:text-primary-foreground transition-colors"
      >
        <LinkStatus className="dark:text-white!">{category}</LinkStatus>
      </Badge>
    </Link>
  ));
};

export default Categories;
