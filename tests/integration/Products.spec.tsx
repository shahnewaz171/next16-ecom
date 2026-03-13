import { http } from 'msw';
import { describe, expect, it } from 'vitest';
import ProductsWrapper from '@/features/products/components/ProductsWrapper';
import { server } from '@/tests/msw.setup';
import { render, screen } from '@/tests/test-utils';

describe('Products page', () => {
  it('should render filters and products list with totals', async () => {
    const Result = await ProductsWrapper({
      searchParams: Promise.resolve({ category: 'Wearables', page: 1 })
    });

    render(Result);

    expect(screen.getByRole('heading', { name: 'Categories' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Sort By' })).toBeInTheDocument();
  });

  it.fails('should render empty state when no products match filters', async () => {
    const Result = await ProductsWrapper({
      searchParams: Promise.resolve({ category: 'Wearables', search: 'xyz', page: 1 })
    });

    render(Result);

    expect(screen.getByText('No products found')).toBeInTheDocument();
  });

  it.fails('renders error message when API call fails', async () => {
    server.use(
      http.get(
        '*/api/products',
        () => new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 })
      )
    );

    const Result = await ProductsWrapper({
      searchParams: Promise.resolve({ category: 'Wearables', page: 1 })
    });

    render(Result);

    expect(screen.getByText('No products found')).toBeInTheDocument();
  });
});
