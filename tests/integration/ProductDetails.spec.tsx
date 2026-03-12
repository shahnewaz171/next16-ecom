import userEvent from '@testing-library/user-event';
import { Home } from 'lucide-react';
import { describe, expect, it, vi } from 'vitest';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ProductDetails from '@/features/products/components/details/ProductDetails';
import { render, screen } from '@/tests/test-utils';
import type { Product } from '@/types/product';

const mockProduct: Product = {
  id: '1',
  name: 'Test Shoe',
  category: 'Accessories',
  price: 29.99,
  description: 'Ergonomic wireless mouse with precision tracking',
  image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop',
  inStock: true
};

const breadcrumbs = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Products', href: '/products' },
  { name: mockProduct.category, href: `/products?category=${mockProduct.category}` },
  { name: mockProduct.name, href: `/product/${mockProduct.id}` }
];

vi.mock('next/headers', () => ({
  cookies: vi.fn(() => ({
    get: vi.fn((name: string) => (name === 'user_id' ? { value: 'mock-user-id' } : undefined)),
    set: vi.fn()
  }))
}));

describe('Product page', () => {
  it('should render breadcrumb and product details together', () => {
    render(
      <>
        <Breadcrumb items={breadcrumbs} />
        <ProductDetails product={mockProduct} />
      </>
    );
    // render(
    //   <>
    //     <Breadcrumb items={breadcrumbs} />
    //     <ProductDetails product={mockProduct} />
    //   </>,
    //   { wrapper: CartProvider }
    // );

    expect(screen.getAllByRole('listitem')).toBeDefined();
    expect(screen.getByTestId('product-details')).toBeInTheDocument();
  });

  it('should render product details with correct information', () => {
    render(<ProductDetails product={mockProduct} />);

    const mockPrice = `$${mockProduct.price.toFixed(2)}`;
    const price = screen.getByText(mockPrice).textContent;

    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
    expect(screen.getByText(mockPrice)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.category)).toBeInTheDocument();

    expect(price).toBe(mockPrice);
  });

  it('add product to cart to check if the component is interactive', async () => {
    render(<ProductDetails product={mockProduct} />);

    const addToCartButton = screen.getByRole('button', { name: /add to cart/i });
    await userEvent.click(addToCartButton);

    expect(addToCartButton).toBeInTheDocument();
    expect(addToCartButton).toHaveClass('bg-[var(--success)]');
    // expect(addToCartButton).toHaveAttribute('disabled');
  });
});
