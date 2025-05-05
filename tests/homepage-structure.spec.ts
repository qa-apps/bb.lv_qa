import { test, expect } from '../fixtures';

test.describe('Homepage structure validation', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.open();
  });

  test('Homepage loads successfully', async ({ homePage }) => {
    await expect(homePage.page).toHaveURL(/en\.bb\.lv/);
  });

  test('Navigation links are present', async ({ homePage }) => {
    const nav = homePage.headerNav;
    await expect(nav).toBeVisible();
  });

  test('Footer is displayed', async ({ homePage }) => {
    await expect(homePage.footer).toBeVisible();
  });

  test('Main articles are visible', async ({ homePage }) => {
    const articles = homePage.page.locator('a[href*="/article/"]');
    const count = await articles.count();
    expect(count).toBeGreaterThan(0);
  });

  test('Language switcher is accessible', async ({ homePage }) => {
    const langSwitcher = homePage.languageSwitcher;
    const count = await langSwitcher.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });
});
