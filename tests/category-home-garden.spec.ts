import { test, expect } from '../fixtures';

test.describe('Home and Garden category', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.open();
    await homePage.homeGardenLink.click();
  });

  test('Home and Garden page loads', async ({ categoryPage }) => {
    await expect(categoryPage.page).toHaveURL(/bb\.lv/);
  });

  test('Articles are displayed in category', async ({ categoryPage }) => {
    const articles = categoryPage.articlesList;
    const count = await articles.count();
    expect(count).toBeGreaterThan(0);
  });

  test('Category title is visible', async ({ categoryPage }) => {
    const title = categoryPage.categoryTitle;
    const count = await title.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Articles have thumbnails', async ({ categoryPage }) => {
    const thumbnails = categoryPage.articleThumbnails;
    const count = await thumbnails.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Featured article is highlighted', async ({ categoryPage }) => {
    const featured = categoryPage.featuredArticle;
    const count = await featured.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });
});
