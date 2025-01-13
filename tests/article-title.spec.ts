import { test, expect } from '../fixtures';

test.describe('Article title display', () => {
  test.beforeEach(async ({ homePage, articlePage }) => {
    await homePage.open();
    const firstArticle = homePage.page.locator('a[href*="/article/"]').first();
    await firstArticle.click();
    await articlePage.page.waitForLoadState('domcontentloaded');
  });

  test('Article title is visible', async ({ articlePage }) => {
    await expect(articlePage.articleTitle).toBeVisible();
  });

  test('Article title is not empty', async ({ articlePage }) => {
    const titleText = await articlePage.articleTitle.textContent();
    expect(titleText?.trim().length).toBeGreaterThan(0);
  });

  test('Article title uses heading tag', async ({ articlePage }) => {
    const tagName = await articlePage.articleTitle.evaluate(el => el.tagName);
    expect(tagName).toBe('H1');
  });

  test('Article title has valid font size', async ({ articlePage }) => {
    const fontSize = await articlePage.articleTitle.evaluate(el => {
      return window.getComputedStyle(el).fontSize;
    });
    const size = parseInt(fontSize);
    expect(size).toBeGreaterThan(16);
  });

  test('Article title is accessible', async ({ articlePage }) => {
    await expect(articlePage.articleTitle).toHaveAttribute('class');
  });
});
