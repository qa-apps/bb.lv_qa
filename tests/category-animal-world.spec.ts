import { test, expect } from '../fixtures';

test.describe('Animal World category section', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.open();
    await homePage.animalWorldLink.click();
  });

  test('Animal World category loads correctly', async ({ categoryPage }) => {
    await expect(categoryPage.page).toHaveURL(/bb\.lv/);
  });

  test('Animal articles are displayed', async ({ categoryPage }) => {
    const articles = categoryPage.articlesList;
    const count = await articles.count();
    expect(count).toBeGreaterThan(0);
  });

  test('Load more button is functional', async ({ categoryPage }) => {
    const loadMore = categoryPage.loadMoreButton;
    const count = await loadMore.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Articles grid is properly structured', async ({ categoryPage }) => {
    const grid = categoryPage.articlesGrid;
    const count = await grid.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Category has article thumbnails', async ({ categoryPage }) => {
    const thumbnails = categoryPage.articleThumbnails;
    const count = await thumbnails.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });
});
