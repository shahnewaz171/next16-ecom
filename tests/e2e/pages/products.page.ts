import type { Page } from '@playwright/test';
import { NavbarComponent } from '@/tests/e2e/pages/navbar.page';

export class ProductsPage {
  readonly navbar: NavbarComponent;

  constructor(private readonly page: Page) {
    this.navbar = new NavbarComponent(page);
  }

  readonly heading = () => this.page.getByRole('heading', { name: 'All Products', level: 1 });
  readonly description = () => this.page.getByText('Discover our complete collection');
  readonly categoryLinks = () => this.page.getByRole('main').getByRole('link');
  readonly productCards = () =>
    this.page
      .locator('main')
      .getByRole('link')
      .filter({ has: this.page.getByRole('heading', { level: 3 }) });

  async goto() {
    await this.page.goto('/products');
  }

  async filterByCategory(name: string) {
    await this.page.getByRole('main').getByRole('link', { name, exact: true }).click();
  }

  async sortBy(option: 'A-Z' | 'Z-A' | 'Price: Low' | 'Price: High') {
    await this.page.getByRole('link', { name: option }).click();
  }
}
