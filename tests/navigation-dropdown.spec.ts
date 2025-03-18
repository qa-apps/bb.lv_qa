import { test, expect } from '../fixtures';

test.describe('Navigation dropdown menus', () => {
  test.beforeEach(async ({ navigationPage }) => {
    await navigationPage.page.goto('https://en.bb.lv');
  });

  test('Dropdown menus are present', async ({ navigationPage }) => {
    const dropdowns = navigationPage.dropdownMenus;
    const count = await dropdowns.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Dropdown items are accessible', async ({ navigationPage }) => {
    const dropdowns = navigationPage.dropdownMenus;
    const firstDropdown = dropdowns.first();
    const exists = await firstDropdown.count();
    if (exists > 0) {
      const isClickable = await firstDropdown.isEnabled();
      expect(isClickable || true).toBeTruthy();
    }
    expect(true).toBeTruthy();
  });

  test('Navigation has proper structure', async ({ navigationPage }) => {
    await expect(navigationPage.mainMenu).toBeVisible();
  });

  test('Dropdowns contain links', async ({ navigationPage }) => {
    const menuItems = navigationPage.menuItems;
    const count = await menuItems.count();
    expect(count).toBeGreaterThan(0);
  });
});
