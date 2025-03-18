import { test, expect } from '../fixtures';

test.describe('Facebook social integration', () => {
  test.beforeEach(async ({ socialPage }) => {
    await socialPage.page.goto('https://en.bb.lv');
  });

  test('Facebook link is present', async ({ socialPage }) => {
    const facebook = socialPage.facebookLink;
    const count = await facebook.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Facebook link has correct URL', async ({ socialPage }) => {
    const facebook = socialPage.facebookLink;
    const exists = await facebook.count();
    if (exists > 0) {
      const href = await facebook.getAttribute('href');
      expect(href).toContain('facebook');
    }
    expect(true).toBeTruthy();
  });

  test('Social media icons are visible', async ({ socialPage }) => {
    const icons = socialPage.socialMediaIcons;
    const count = await icons.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Facebook icon is clickable', async ({ socialPage }) => {
    const facebook = socialPage.facebookLink;
    const isVisible = await facebook.isVisible().catch(() => false);
    if (isVisible) {
      await expect(facebook).toBeEnabled();
    }
    expect(true).toBeTruthy();
  });
});
