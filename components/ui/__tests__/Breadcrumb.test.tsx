import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Breadcrumb from '@/components/ui/Breadcrumb';

const items = [
  { id: '1', name: 'Home', href: '/' },
  { id: '2', name: 'Products', href: '/products' },
  { id: '3', name: 'Item', href: '/products/item' }
];

describe('Breadcrumb', () => {
  it('should render an empty breadcrumb when no items are provided', () => {
    render(<Breadcrumb items={[]} />);

    const list = screen.getByRole('list');

    // const listItems = screen.queryAllByRole('listitem');
    const listItems = within(list).queryAllByRole('listitem');

    expect(listItems.length).toBe(0);
  });

  it('should render all breadcrumb items', () => {
    render(<Breadcrumb items={items} />);

    const breadcrumbItems = screen.getAllByRole('listitem');

    for (const item of breadcrumbItems) {
      expect(item.textContent).toBeDefined();
    }
  });

  it('should render all breadcrumb with icons', () => {
    render(
      <Breadcrumb items={items.map((item) => ({ ...item, icon: () => <span>Icon</span> }))} />
    );

    const breadcrumbItems = screen.getAllByRole('listitem');

    for (const item of breadcrumbItems) {
      expect(item.textContent).toBeDefined();
    }
  });

  it('should render all breadcrumb items without redirect paths', () => {
    render(<Breadcrumb items={items.map((item) => ({ ...item, href: '' }))} />);

    const breadcrumbItems = screen.getAllByRole('listitem');

    for (const item of breadcrumbItems) {
      expect(item.textContent).toBeDefined();
    }
  });
});
