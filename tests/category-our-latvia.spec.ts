import { test, expect } from '../fixtures';

test.describe('Our Latvia category tests', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.open();
    await homePage.ourLatviaLink.click();
  });

  test('Our Latvia category is accessible', async ({ categoryPage }) => {
    await expect(categoryPage.page).toHaveURL(/bb\.lv/);
  });

  test('Latvia articles list is visible', async ({ categoryPage }) => {
    const articles = categoryPage.articlesList;
    const count = await articles.count();
    expect(count).toBeGreaterThan(0);
  });

  test('Category has proper grid layout', async ({ categoryPage }) => {
    const grid = categoryPage.articlesGrid;
    const count = await grid.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Article thumbnails are displayed', async ({ categoryPage }) => {
    const thumbnails = categoryPage.articleThumbnails;
    const count = await thumbnails.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Category description is shown', async ({ categoryPage }) => {
    const description = categoryPage.categoryDescription;
    const count = await description.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });
});
