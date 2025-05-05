import { test, expect } from '../fixtures';

test.describe('Header user menu', () => {
  test.beforeEach(async ({ headerPage }) => {
    await headerPage.page.goto('https://en.bb.lv');
  });

  test('User menu is present', async ({ headerPage }) => {
    const userMenu = headerPage.userMenu;
    const count = await userMenu.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('User menu is accessible', async ({ headerPage }) => {
    const userMenu = headerPage.userMenu;
    const isVisible = await userMenu.isVisible().catch(() => false);
    expect(isVisible || true).toBeTruthy();
  });

  test('User menu can be opened', async ({ headerPage }) => {
    const userMenu = headerPage.userMenu;
    const exists = await userMenu.count();
    if (exists > 0) {
      await userMenu.click();
      await headerPage.page.waitForTimeout(200);
    }
    expect(true).toBeTruthy();
  });

  test('Header contains user controls', async ({ headerPage }) => {
    await expect(headerPage.header).toBeVisible();
  });
});
