import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { getCategories } from '@/features/category/category-services';

const Categories = async () => {
  const categories = await getCategories(['All']);

  return categories.map((category) => (
    <Link key={category} href={`/products?category=${category}`}>
      <Badge
        variant="outline"
        size="lg"
        clickable={true}
        className="hover:bg-primary hover:text-primary-foreground transition-colors"
      >
        {category}
      </Badge>
    </Link>
  ));
};

export default Categories;
