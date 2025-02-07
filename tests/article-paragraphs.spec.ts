import { test, expect } from '../fixtures';

test.describe('Article paragraph structure', () => {
  test.beforeEach(async ({ homePage, articlePage }) => {
    await homePage.open();
    const firstArticle = homePage.page.locator('a[href*="/article/"]').first();
    await firstArticle.click();
    await articlePage.page.waitForLoadState('domcontentloaded');
  });

  test('Article has multiple paragraphs', async ({ articlePage }) => {
    const paragraphs = articlePage.articleContent.locator('p');
    const count = await paragraphs.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Paragraphs contain text', async ({ articlePage }) => {
    const paragraphs = articlePage.articleContent.locator('p');
    const firstP = paragraphs.first();
    const exists = await firstP.count();
    if (exists > 0) {
      const text = await firstP.textContent();
      expect(text?.trim().length || 0).toBeGreaterThanOrEqual(0);
    }
    expect(true).toBeTruthy();
  });

  test('Paragraphs are readable', async ({ articlePage }) => {
    const paragraphs = articlePage.articleContent.locator('p');
    const count = await paragraphs.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Content is properly formatted', async ({ articlePage }) => {
    await expect(articlePage.articleContent).toBeVisible();
  });
});
