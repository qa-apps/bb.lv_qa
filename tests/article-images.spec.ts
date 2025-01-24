import { test, expect } from '../fixtures';

test.describe('Article images functionality', () => {
  test.beforeEach(async ({ homePage, articlePage }) => {
    await homePage.open();
    const firstArticle = homePage.page.locator('a[href*="/article/"]').first();
    await firstArticle.click();
    await articlePage.page.waitForLoadState('domcontentloaded');
  });

  test('Article has main image', async ({ articlePage }) => {
    const imageCount = await articlePage.articleImage.count();
    expect(imageCount).toBeGreaterThan(0);
  });

  test('Article image has src attribute', async ({ articlePage }) => {
    await expect(articlePage.articleImage).toHaveAttribute('src');
  });

  test('Article image has alt text', async ({ articlePage }) => {
    await expect(articlePage.articleImage).toHaveAttribute('alt');
  });

  test('Article image is loaded', async ({ articlePage }) => {
    const naturalWidth = await articlePage.articleImage.evaluate((img: HTMLImageElement) => img.naturalWidth);
    expect(naturalWidth).toBeGreaterThan(0);
  });

  test('Article image has proper dimensions', async ({ articlePage }) => {
    const width = await articlePage.articleImage.evaluate((img: HTMLImageElement) => img.width);
    expect(width).toBeGreaterThan(100);
  });
});
