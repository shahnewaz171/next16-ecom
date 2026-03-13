import { HttpResponse, http } from 'msw';
import { products } from '@/features/products/data/products';
import { filterProducts } from '@/features/products/product-services';
import type { ProductCategory, SortOption } from '@/types/product';

export const handlers = [
  http.get('*/api/products', ({ request }) => {
    const { searchParams } = new URL(request.url);
    const category = (searchParams.get('category') || undefined) as ProductCategory | undefined;
    const search = searchParams.get('search') || undefined;
    const sort = (searchParams.get('sort') || undefined) as SortOption | undefined;
    const page = Number.parseInt(searchParams.get('page') || '1', 10) || 1;
    const filtered = filterProducts(products, { category, search, sort, page });
    const productsPerPage = 12;
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    return HttpResponse.json(
      {
        products: filtered.slice(startIndex, endIndex),
        totalPages: Math.max(1, Math.ceil(filtered.length / productsPerPage)),
        currentPage: page,
        totalProducts: filtered.length
      },
      { status: 200 }
    );
  })
  // http.get(`${process.env.BASE_URL}/api/products/:id`, ({ params }) => {
  //   const { id } = params;
  //   const product = products.find((p) => p.id === id);

  //   if (!product) {
  //     return HttpResponse.json({ message: 'Product not found' }, { status: 404 });
  //   }

  //   return HttpResponse.json(product, { status: 200 });
  // })
];
