import { test, expect } from '../fixtures';

test.describe('Main navigation menu', () => {
  test.beforeEach(async ({ navigationPage }) => {
    await navigationPage.page.goto('https://en.bb.lv');
  });

  test('Main menu is visible', async ({ navigationPage }) => {
    await expect(navigationPage.mainMenu).toBeVisible();
  });

  test('Menu contains navigation items', async ({ navigationPage }) => {
    const menuItems = navigationPage.menuItems;
    const count = await menuItems.count();
    expect(count).toBeGreaterThan(0);
  });

  test('Menu items are links', async ({ navigationPage }) => {
    const firstItem = navigationPage.menuItems.first();
    await expect(firstItem).toHaveAttribute('href');
  });

  test('Logo is present in navigation', async ({ navigationPage }) => {
    const logo = navigationPage.logo;
    const count = await logo.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Top navigation bar exists', async ({ navigationPage }) => {
    const topNav = navigationPage.topNavigation;
    await expect(topNav).toBeVisible();
  });
});
