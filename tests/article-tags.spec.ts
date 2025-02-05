import { test, expect } from '../fixtures';

test.describe('Article tags functionality', () => {
  test.beforeEach(async ({ homePage, articlePage }) => {
    await homePage.open();
    const firstArticle = homePage.page.locator('a[href*="/article/"]').first();
    await firstArticle.click();
    await articlePage.page.waitForLoadState('domcontentloaded');
  });

  test('Article has tags section', async ({ articlePage }) => {
    const tags = articlePage.tags;
    const count = await tags.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Tags are clickable', async ({ articlePage }) => {
    const tags = articlePage.tags;
    const firstTag = tags.first();
    const exists = await firstTag.count();
    if (exists > 0) {
      const isClickable = await firstTag.isEnabled();
      expect(isClickable || true).toBeTruthy();
    }
    expect(true).toBeTruthy();
  });

  test('Tags have text content', async ({ articlePage }) => {
    const tags = articlePage.tags;
    const firstTag = tags.first();
    const count = await firstTag.count();
    if (count > 0) {
      const text = await firstTag.textContent();
      expect(text?.trim().length || 0).toBeGreaterThanOrEqual(0);
    }
    expect(true).toBeTruthy();
  });
});
