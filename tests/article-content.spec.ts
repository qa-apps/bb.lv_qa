import { test, expect } from '../fixtures';

test.describe('Article content structure', () => {
  test.beforeEach(async ({ homePage, articlePage }) => {
    await homePage.open();
    const firstArticle = homePage.page.locator('a[href*="/article/"]').first();
    await firstArticle.click();
    await articlePage.page.waitForLoadState('domcontentloaded');
  });

  test('Article content is visible', async ({ articlePage }) => {
    await expect(articlePage.articleContent).toBeVisible();
  });

  test('Article content has text', async ({ articlePage }) => {
    const content = await articlePage.articleContent.textContent();
    expect(content?.trim().length).toBeGreaterThan(50);
  });

  test('Article has paragraphs', async ({ articlePage }) => {
    const paragraphs = articlePage.articleContent.locator('p');
    await expect(paragraphs.first()).toBeVisible();
  });

  test('Article content is readable', async ({ articlePage }) => {
    const lineHeight = await articlePage.articleContent.evaluate(el => {
      return window.getComputedStyle(el).lineHeight;
    });
    expect(lineHeight).toBeTruthy();
  });

  test('Article has proper structure', async ({ articlePage }) => {
    await expect(articlePage.articleContent).toHaveAttribute('class');
  });
});
