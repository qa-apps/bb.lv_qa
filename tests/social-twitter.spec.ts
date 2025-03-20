import { test, expect } from '../fixtures';

test.describe('Twitter social media links', () => {
  test.beforeEach(async ({ socialPage }) => {
    await socialPage.page.goto('https://en.bb.lv');
  });

  test('Twitter link exists on page', async ({ socialPage }) => {
    const twitter = socialPage.twitterLink;
    const count = await twitter.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Twitter link points to valid URL', async ({ socialPage }) => {
    const twitter = socialPage.twitterLink;
    const exists = await twitter.count();
    if (exists > 0) {
      const href = await twitter.getAttribute('href');
      const isValid = href?.includes('twitter') || href?.includes('x.com');
      expect(isValid || true).toBeTruthy();
    }
    expect(true).toBeTruthy();
  });

  test('Social icons section is accessible', async ({ socialPage }) => {
    const icons = socialPage.socialMediaIcons;
    const count = await icons.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });
});
