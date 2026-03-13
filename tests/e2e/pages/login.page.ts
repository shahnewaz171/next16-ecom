import type { Page } from '@playwright/test';
import { NavbarComponent } from '@/tests/e2e/pages/navbar.page';

export class LoginPage {
  readonly navbar: NavbarComponent;

  constructor(private readonly page: Page) {
    this.navbar = new NavbarComponent(page);
  }

  readonly heading = () => this.page.getByRole('heading', { name: 'Welcome Back', level: 1 });
  readonly subtitle = () => this.page.getByText('Sign in to continue shopping');
  readonly emailInput = () => this.page.getByRole('textbox', { name: 'Email' });
  readonly passwordInput = () => this.page.getByRole('textbox', { name: 'Password' });
  readonly signInButton = () =>
    this.page.getByRole('main').getByRole('button', { name: 'Sign In' });
  readonly signUpLink = () => this.page.getByRole('link', { name: 'Sign up' });
  readonly forgotPasswordLink = () => this.page.getByRole('link', { name: 'Forgot password?' });

  async goto() {
    await this.page.goto('/login');
  }

  async signIn() {
    await this.signInButton().click();
  }
}
