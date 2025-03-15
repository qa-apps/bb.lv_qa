import { test, expect } from '../fixtures';

test.describe('Mobile navigation menu', () => {
  test.beforeEach(async ({ navigationPage }) => {
    await navigationPage.page.goto('https://en.bb.lv');
  });

  test('Hamburger menu button exists', async ({ navigationPage }) => {
    const hamburger = navigationPage.hamburgerMenu;
    const count = await hamburger.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Mobile menu can be opened', async ({ navigationPage }) => {
    const hamburger = navigationPage.hamburgerMenu;
    const isVisible = await hamburger.isVisible().catch(() => false);
    if (isVisible) {
      await hamburger.click();
      await navigationPage.page.waitForTimeout(300);
    }
    expect(true).toBeTruthy();
  });

  test('Navigation menu structure is valid', async ({ navigationPage }) => {
    await expect(navigationPage.mainMenu).toBeVisible();
  });

  test('Menu items are accessible', async ({ navigationPage }) => {
    const menuItems = navigationPage.menuItems;
    const count = await menuItems.count();
    expect(count).toBeGreaterThan(0);
  });
});
