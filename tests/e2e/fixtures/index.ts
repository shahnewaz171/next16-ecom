import { test as base } from '@playwright/test';
import { HomePage, LoginPage, NavbarComponent, ProductsPage, ProfilePage } from '@/e2e/pages';

// ─── Fixture types ─────────────────────────────────────────────────

type AppFixtures = {
  homePage: HomePage;
  productsPage: ProductsPage;
  loginPage: LoginPage;
  profilePage: ProfilePage;
  navbar: NavbarComponent;
};

// ─── Extend base test ──────────────────────────────────────────────

export const test = base.extend<AppFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  profilePage: async ({ page }, use) => {
    await use(new ProfilePage(page));
  },
  navbar: async ({ page }, use) => {
    await use(new NavbarComponent(page));
  }
});
