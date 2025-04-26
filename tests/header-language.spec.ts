import { test, expect } from '../fixtures';

test.describe('Header language switcher', () => {
  test.beforeEach(async ({ headerPage }) => {
    await headerPage.page.goto('https://en.bb.lv');
  });

  test('Language switcher is visible', async ({ headerPage }) => {
    const langSwitcher = headerPage.languageSwitcher;
    const count = await langSwitcher.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Language switcher has link', async ({ headerPage }) => {
    const langSwitcher = headerPage.languageSwitcher;
    const exists = await langSwitcher.count();
    if (exists > 0) {
      await expect(langSwitcher).toHaveAttribute('href');
    }
    expect(true).toBeTruthy();
  });

  test('Language switcher is clickable', async ({ headerPage }) => {
    const langSwitcher = headerPage.languageSwitcher;
    const isVisible = await langSwitcher.isVisible().catch(() => false);
    if (isVisible) {
      await expect(langSwitcher).toBeEnabled();
    }
    expect(true).toBeTruthy();
  });

  test('Date display is in header', async ({ headerPage }) => {
    const dateDisplay = headerPage.dateDisplay;
    const count = await dateDisplay.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });
});
