import { cacheTag } from 'next/dist/server/use-cache/cache-tag';
import { cache } from 'react';
import { products } from '@/features/products/data/products';
import type { PaginatedProducts, Product, ProductFilters, SortOption } from '@/types/product';
import { simulateDelay } from '@/utils';

const PRODUCTS_PER_PAGE = 12;

export const getFeaturedProducts = cache(async (limit = 8): Promise<Product[]> => {
  await simulateDelay();

  return products
    .filter((p) => p.inStock && p.rating && p.rating >= 4.5)
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, limit);
});

/**
 * Get a single product by ID
 */
export const getProductById = cache(async (id: string): Promise<Product | null> => {
  'use cache: remote';
  cacheTag(`products-${id}`);

  await simulateDelay();

  return products.find((p) => p.id === id) || null;
});

/**
 * Get related products (same category, exclude current)
 */
export const getRelatedProducts = cache(
  async (productId: string, limit = 4): Promise<Product[]> => {
    'use cache: remote';
    cacheTag(`related-products-${productId}`);

    const product = await getProductById(productId);
    if (!product) return [];

    return products
      .filter((p) => p.id !== productId && p.category === product.category)
      .slice(0, limit);
  }
);

/**
 * Sort products by specified option
 */
function sortProducts(productList: Product[], sortOption: SortOption): Product[] {
  const sorted = [...productList];

  switch (sortOption) {
    case 'asc':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case 'desc':
      return sorted.sort((a, b) => b.name.localeCompare(a.name));
    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price);
    default:
      return sorted;
  }
}

/**
 * Filter and sort products based on criteria
 */
function filterProducts(allProducts: Product[], filters: ProductFilters): Product[] {
  let filtered = [...allProducts];

  // Filter by category
  if (filters.category && filters.category !== 'All') {
    filtered = filtered.filter((p) => p.category === filters.category);
  }

  // Filter by search query
  if (filters.search) {
    const query = filters.search.toLowerCase();
    filtered = filtered.filter(
      (p) => p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query)
    );
  }

  // Sort products
  if (filters.sort) {
    filtered = sortProducts(filtered, filters.sort);
  }

  return filtered;
}

/**
 * Get paginated products with filters
 * Can be used in Server Components with caching
 */
export const getProducts = cache(
  async (filters: ProductFilters = {}): Promise<PaginatedProducts> => {
    'use cache: remote';

    await simulateDelay();

    const filtered = filterProducts(products, filters);
    const page = filters.page || 1;
    const startIndex = (page - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;

    return {
      products: filtered.slice(startIndex, endIndex),
      totalPages: Math.ceil(filtered.length / PRODUCTS_PER_PAGE),
      currentPage: page,
      totalProducts: filtered.length
    };
  }
);
