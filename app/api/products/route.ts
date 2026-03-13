import { products } from '@/features/products/data/products';
import { filterProducts } from '@/features/products/product-services';
import type { ProductCategory, SortOption } from '@/types/product';
import { simulateDelay } from '@/utils';

const PRODUCTS_PER_PAGE = 12;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const category = searchParams.get('category') as ProductCategory;
  const search = searchParams.get('search') as string;
  const sort = searchParams.get('sort') as SortOption;

  const page = Number.parseInt(searchParams.get('page') || '1', 10);

  try {
    await simulateDelay();

    const filtered = filterProducts(products, { category, search, sort });
    const customizePage = page || 1;
    const startIndex = (customizePage - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;

    return new Response(
      JSON.stringify({
        products: filtered.slice(startIndex, endIndex),
        totalPages: Math.ceil(filtered.length / PRODUCTS_PER_PAGE),
        currentPage: customizePage,
        totalProducts: filtered.length
      }),
      { status: 200 }
    );
  } catch (error) {
    console.log('Error in GET /api/products:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
  }
}
