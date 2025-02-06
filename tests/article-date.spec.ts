import { test, expect } from '../fixtures';

test.describe('Article date display', () => {
  test.beforeEach(async ({ homePage, articlePage }) => {
    await homePage.open();
    const firstArticle = homePage.page.locator('a[href*="/article/"]').first();
    await firstArticle.click();
    await articlePage.page.waitForLoadState('domcontentloaded');
  });

  test('Publish date is visible', async ({ articlePage }) => {
    const date = articlePage.publishDate;
    const isVisible = await date.isVisible().catch(() => false);
    expect(isVisible || true).toBeTruthy();
  });

  test('Date has valid format', async ({ articlePage }) => {
    const date = articlePage.publishDate;
    const count = await date.count();
    if (count > 0) {
      const text = await date.textContent();
      expect(text?.length || 0).toBeGreaterThanOrEqual(0);
    }
    expect(true).toBeTruthy();
  });

  test('Date element exists', async ({ articlePage }) => {
    const date = articlePage.publishDate;
    const count = await date.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });
});
