import type { Page } from '@playwright/test';
import { NavbarComponent } from '@/e2e/pages/navbar.page';

/**
 * Profile page — requires authentication.
 * Tests using this POM should depend on the `auth-setup` project
 * and use `storageState` to load the authenticated session.
 */
export class ProfilePage {
  readonly navbar: NavbarComponent;

  constructor(private readonly page: Page) {
    this.navbar = new NavbarComponent(page);
  }

  readonly heading = () => this.page.getByRole('heading', { level: 2 });
  readonly premiumBadge = () => this.page.getByText('Premium Member');
  readonly editProfileButton = () => this.page.getByRole('button', { name: 'Edit Profile' });
  readonly logoutButton = () =>
    this.page.getByRole('main').getByRole('button', { name: /log\s*out/i });
  readonly userEmail = () => this.page.getByText(/@/);

  async goto() {
    await this.page.goto('/profile');
  }
}
