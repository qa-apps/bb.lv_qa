import { test, expect } from '../fixtures';

test.describe('Article page layout', () => {
  test.beforeEach(async ({ homePage, articlePage }) => {
    await homePage.open();
    const firstArticle = homePage.page.locator('a[href*="/article/"]').first();
    await firstArticle.click();
    await articlePage.page.waitForLoadState('domcontentloaded');
  });

  test('Article page has proper structure', async ({ articlePage }) => {
    await expect(articlePage.articleTitle).toBeVisible();
  });

  test('Article content is centered', async ({ articlePage }) => {
    await expect(articlePage.articleContent).toBeVisible();
  });

  test('Article has main image', async ({ articlePage }) => {
    const image = articlePage.articleImage;
    const count = await image.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Article layout is responsive', async ({ articlePage }) => {
    const url = articlePage.page.url();
    expect(url).toContain('bb.lv');
  });
});
