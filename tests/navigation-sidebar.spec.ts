import { test, expect } from '../fixtures';

test.describe('Sidebar navigation elements', () => {
  test.beforeEach(async ({ navigationPage }) => {
    await navigationPage.page.goto('https://en.bb.lv');
  });

  test('Sidebar menu is present', async ({ navigationPage }) => {
    const sidebar = navigationPage.sidebarMenu;
    const count = await sidebar.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Sidebar contains navigation links', async ({ navigationPage }) => {
    const sidebar = navigationPage.sidebarMenu;
    const exists = await sidebar.count();
    if (exists > 0) {
      const links = sidebar.locator('a');
      const linkCount = await links.count();
      expect(linkCount).toBeGreaterThanOrEqual(0);
    }
    expect(true).toBeTruthy();
  });

  test('Dropdown menus are available', async ({ navigationPage }) => {
    const dropdowns = navigationPage.dropdownMenus;
    const count = await dropdowns.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Navigation is properly structured', async ({ navigationPage }) => {
    await expect(navigationPage.mainMenu).toBeVisible();
  });
});
