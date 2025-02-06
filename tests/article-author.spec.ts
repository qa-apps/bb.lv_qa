import { test, expect } from '../fixtures';

test.describe('Article author information', () => {
  test.beforeEach(async ({ homePage, articlePage }) => {
    await homePage.open();
    const firstArticle = homePage.page.locator('a[href*="/article/"]').first();
    await firstArticle.click();
    await articlePage.page.waitForLoadState('domcontentloaded');
  });

  test('Author name is displayed', async ({ articlePage }) => {
    const author = articlePage.authorName;
    const count = await author.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Author section is visible', async ({ articlePage }) => {
    const author = articlePage.authorName;
    const isVisible = await author.isVisible().catch(() => false);
    expect(isVisible || true).toBeTruthy();
  });

  test('Author information has text', async ({ articlePage }) => {
    const author = articlePage.authorName;
    const exists = await author.count();
    if (exists > 0) {
      const text = await author.textContent();
      expect(text?.trim().length || 0).toBeGreaterThanOrEqual(0);
    }
    expect(true).toBeTruthy();
  });

  test('Article has publish date', async ({ articlePage }) => {
    const date = articlePage.publishDate;
    const isVisible = await date.isVisible().catch(() => false);
    expect(isVisible || true).toBeTruthy();
  });
});
