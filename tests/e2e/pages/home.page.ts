import type { Page } from '@playwright/test';
import { NavbarComponent } from '@/tests/e2e/pages/navbar.page';

export class HomePage {
  readonly navbar: NavbarComponent;

  constructor(private readonly page: Page) {
    this.navbar = new NavbarComponent(page);
  }

  readonly heroHeading = () =>
    this.page.getByRole('heading', { name: 'Welcome to Commerce', level: 1 });
  readonly heroDescription = () =>
    this.page.getByText('Discover amazing products with our Next.js 16');
  readonly shopNowButton = () => this.page.getByRole('link', { name: 'Shop Now' });
  readonly featuredHeading = () => this.page.getByRole('heading', { name: 'Featured Products' });
  readonly categoryHeading = () => this.page.getByRole('heading', { name: 'Shop by Category' });
  readonly productCards = () =>
    this.page
      .locator('main')
      .getByRole('link')
      .filter({ has: this.page.getByRole('heading', { level: 3 }) });

  async goto() {
    await this.page.goto('/');
  }
}
