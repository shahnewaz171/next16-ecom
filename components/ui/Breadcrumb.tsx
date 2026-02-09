import { ChevronRight } from 'lucide-react';
import type { Route } from 'next';
import Link from 'next/link';
import { getUidWithPrefix } from '@/utils';

interface ProductDetailsProps {
  items: {
    id?: string;
    name: string;
    href: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
}

const Breadcrumb = ({ items }: ProductDetailsProps) => (
  <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
    <ol className="flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap">
      {items.map((item, index) => {
        const { id, name, icon: Icon } = item;
        const isLast = index === items.length - 1;

        return (
          <li
            key={id || getUidWithPrefix('breadcrumb-item', index)}
            className="flex items-center gap-1"
          >
            {Icon && <Icon className="size-3.5" />}
            <Link
              href={(item.href || '#') as Route}
              className={
                isLast
                  ? 'text-foreground font-medium truncate max-w-50 sm:max-w-none cursor-auto'
                  : 'hover:text-foreground transition-colors'
              }
            >
              {name}
            </Link>
            {index < items.length - 1 && <ChevronRight className="size-3.5" />}
          </li>
        );
      })}
    </ol>
  </nav>
);

export default Breadcrumb;
