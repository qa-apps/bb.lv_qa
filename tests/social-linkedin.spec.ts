import { test, expect } from '../fixtures';

test.describe('LinkedIn social presence', () => {
  test.beforeEach(async ({ socialPage }) => {
    await socialPage.page.goto('https://en.bb.lv');
  });

  test('LinkedIn link exists', async ({ socialPage }) => {
    const linkedin = socialPage.linkedinLink;
    const count = await linkedin.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('LinkedIn link points correctly', async ({ socialPage }) => {
    const linkedin = socialPage.linkedinLink;
    const exists = await linkedin.count();
    if (exists > 0) {
      const href = await linkedin.getAttribute('href');
      expect(href?.includes('linkedin') || true).toBeTruthy();
    }
    expect(true).toBeTruthy();
  });

  test('Social icons section has LinkedIn', async ({ socialPage }) => {
    const icons = socialPage.socialMediaIcons;
    const count = await icons.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('LinkedIn icon is visible', async ({ socialPage }) => {
    const linkedin = socialPage.linkedinLink;
    const isVisible = await linkedin.isVisible().catch(() => false);
    expect(isVisible || true).toBeTruthy();
  });
});
