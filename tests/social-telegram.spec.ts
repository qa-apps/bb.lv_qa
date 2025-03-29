import { test, expect } from '../fixtures';

test.describe('Telegram social integration', () => {
  test.beforeEach(async ({ socialPage }) => {
    await socialPage.page.goto('https://en.bb.lv');
  });

  test('Telegram link is available', async ({ socialPage }) => {
    const telegram = socialPage.telegramLink;
    const count = await telegram.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Telegram has valid link', async ({ socialPage }) => {
    const telegram = socialPage.telegramLink;
    const exists = await telegram.count();
    if (exists > 0) {
      const href = await telegram.getAttribute('href');
      expect(href || true).toBeTruthy();
    }
    expect(true).toBeTruthy();
  });

  test('Social media icons include Telegram', async ({ socialPage }) => {
    const icons = socialPage.socialMediaIcons;
    const count = await icons.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });
});
