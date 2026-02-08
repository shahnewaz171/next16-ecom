export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: ProductCategory;
  inStock: boolean;
  rating?: number;
  reviews?: number;
}

export type ProductCategory =
  | 'All'
  | 'Accessories'
  | 'Audio'
  | 'Electronics'
  | 'Home'
  | 'Kitchen'
  | 'Smart Home'
  | 'Wearables';

export type SortOption = 'asc' | 'desc' | 'price-low' | 'price-high';

export interface ProductFilters {
  category?: ProductCategory;
  search?: string;
  sort?: SortOption;
  page?: number;
}

export interface PaginatedProducts {
  products: Product[];
  totalPages: number;
  currentPage: number;
  totalProducts: number;
}
