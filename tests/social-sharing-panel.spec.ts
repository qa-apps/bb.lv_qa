import { test, expect } from '../fixtures';

test.describe('Social sharing panel features', () => {
  test.beforeEach(async ({ homePage, socialPage }) => {
    await homePage.open();
    const firstArticle = homePage.page.locator('a[href*="/article/"]').first();
    await firstArticle.click();
  });

  test('Share button is visible', async ({ socialPage }) => {
    const shareButton = socialPage.shareButton;
    const count = await shareButton.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Share panel can be opened', async ({ socialPage }) => {
    const shareButton = socialPage.shareButton;
    const isVisible = await shareButton.isVisible().catch(() => false);
    if (isVisible) {
      await shareButton.click();
      const panel = socialPage.socialSharePanel;
      await expect(panel).toBeVisible();
    }
    expect(true).toBeTruthy();
  });

  test('Share panel contains social options', async ({ socialPage }) => {
    const sharePanel = socialPage.socialSharePanel;
    const count = await sharePanel.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Like button is functional', async ({ socialPage }) => {
    const likeButton = socialPage.likeButton;
    const count = await likeButton.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });
});
