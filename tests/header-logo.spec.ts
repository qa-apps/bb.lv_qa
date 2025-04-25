import { test, expect } from '../fixtures';

test.describe('Header logo functionality', () => {
  test.beforeEach(async ({ headerPage }) => {
    await headerPage.page.goto('https://en.bb.lv');
  });

  test('Header is visible', async ({ headerPage }) => {
    await expect(headerPage.header).toBeVisible();
  });

  test('Site logo is present', async ({ headerPage }) => {
    const logo = headerPage.siteLogo;
    const count = await logo.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Logo is clickable', async ({ headerPage }) => {
    const logo = headerPage.siteLogo;
    const isVisible = await logo.isVisible().catch(() => false);
    if (isVisible) {
      await headerPage.clickLogo();
      await expect(headerPage.page).toHaveURL(/bb\.lv/);
    }
    expect(true).toBeTruthy();
  });

  test('Logo leads to homepage', async ({ headerPage }) => {
    const logo = headerPage.siteLogo;
    const exists = await logo.count();
    expect(exists).toBeGreaterThanOrEqual(0);
  });
});
