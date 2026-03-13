import type { Page } from '@playwright/test';

/**
 * Navbar component — scoped to the `<header>` (banner role) to avoid
 * collisions with duplicated links that appear in the footer.
 */
export class NavbarComponent {
  constructor(private readonly page: Page) {}

  private readonly banner = () => this.page.getByRole('banner');

  readonly logo = () => this.banner().getByRole('link', { name: 'Commerce' });
  readonly searchBox = () => this.banner().getByRole('searchbox', { name: 'Search products...' });
  readonly themeToggle = () => this.banner().getByRole('button', { name: 'Toggle theme' });
  readonly productsLink = () => this.banner().getByRole('link', { name: 'Products', exact: true });
  readonly aboutLink = () => this.banner().getByRole('link', { name: 'About', exact: true });
  readonly cartLink = () => this.banner().getByRole('link', { name: /cart/i });
  readonly signInLink = () => this.banner().getByRole('link', { name: 'Sign In', exact: true });

  async navigateHome() {
    await this.logo().click();
    await this.page.waitForURL('/');
  }

  async navigateToProducts() {
    await this.productsLink().click();
    await this.page.waitForURL(/\/products/);
  }

  async navigateToAbout() {
    await this.aboutLink().click();
    await this.page.waitForURL('/about');
  }

  async search(query: string) {
    await this.searchBox().fill(query);
    await this.searchBox().press('Enter');
  }
}
