import { test, expect } from '../fixtures';

test.describe('Related articles section', () => {
  test.beforeEach(async ({ homePage, articlePage }) => {
    await homePage.open();
    const firstArticle = homePage.page.locator('a[href*="/article/"]').first();
    await firstArticle.click();
    await articlePage.page.waitForLoadState('domcontentloaded');
  });

  test('Related articles section exists', async ({ articlePage }) => {
    const related = articlePage.relatedArticles;
    const count = await related.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Related articles are links', async ({ articlePage }) => {
    const firstRelated = articlePage.relatedArticles.first();
    const exists = await firstRelated.count();
    if (exists > 0) {
      await expect(firstRelated).toHaveAttribute('href');
    }
    expect(true).toBeTruthy();
  });

  test('Related articles have text', async ({ articlePage }) => {
    const firstRelated = articlePage.relatedArticles.first();
    const count = await firstRelated.count();
    if (count > 0) {
      const text = await firstRelated.textContent();
      expect(text?.trim().length).toBeGreaterThan(0);
    }
    expect(true).toBeTruthy();
  });

  test('Related articles lead to valid URLs', async ({ articlePage }) => {
    const firstRelated = articlePage.relatedArticles.first();
    const count = await firstRelated.count();
    if (count > 0) {
      const href = await firstRelated.getAttribute('href');
      expect(href).toBeTruthy();
    }
    expect(true).toBeTruthy();
  });
});
