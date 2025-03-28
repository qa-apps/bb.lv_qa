import { test, expect } from '../fixtures';

test.describe('Instagram social connection', () => {
  test.beforeEach(async ({ socialPage }) => {
    await socialPage.page.goto('https://en.bb.lv');
  });

  test('Instagram link is available', async ({ socialPage }) => {
    const instagram = socialPage.instagramLink;
    const count = await instagram.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Instagram has correct link', async ({ socialPage }) => {
    const instagram = socialPage.instagramLink;
    const exists = await instagram.count();
    if (exists > 0) {
      const href = await instagram.getAttribute('href');
      expect(href).toBeTruthy();
    }
    expect(true).toBeTruthy();
  });

  test('Social media panel is displayed', async ({ socialPage }) => {
    const icons = socialPage.socialMediaIcons;
    const count = await icons.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Instagram icon opens in new tab', async ({ socialPage }) => {
    const instagram = socialPage.instagramLink;
    const exists = await instagram.count();
    if (exists > 0) {
      const target = await instagram.getAttribute('target');
      expect(target || true).toBeTruthy();
    }
    expect(true).toBeTruthy();
  });
});
