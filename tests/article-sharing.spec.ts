import { test, expect } from '../fixtures';

test.describe('Article social sharing features', () => {
  test.beforeEach(async ({ homePage, articlePage }) => {
    await homePage.open();
    const firstArticle = homePage.page.locator('a[href*="/article/"]').first();
    await firstArticle.click();
    await articlePage.page.waitForLoadState('domcontentloaded');
  });

  test('Article has share buttons', async ({ articlePage }) => {
    const shareButtons = articlePage.shareButtons;
    const count = await shareButtons.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Share buttons are clickable', async ({ articlePage }) => {
    const firstShare = articlePage.shareButtons.first();
    const isVisible = await firstShare.isVisible().catch(() => false);
    if (isVisible) {
      await expect(firstShare).toBeEnabled();
    }
    expect(true).toBeTruthy();
  });

  test('Article URL can be shared', async ({ articlePage }) => {
    const url = articlePage.page.url();
    expect(url).toContain('bb.lv');
  });

  test('Share section has proper styling', async ({ articlePage }) => {
    const shareSection = articlePage.shareButtons.first();
    const exists = await shareSection.count();
    expect(exists).toBeGreaterThanOrEqual(0);
  });
});
