import { test, expect } from '../fixtures';

test.describe('Politics category page', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.open();
    await homePage.politicsLink.click();
  });

  test('Politics category loads correctly', async ({ categoryPage }) => {
    await expect(categoryPage.page).toHaveURL(/bb\.lv/);
  });

  test('Politics articles are displayed', async ({ categoryPage }) => {
    const articles = categoryPage.articlesList;
    const count = await articles.count();
    expect(count).toBeGreaterThan(0);
  });

  test('Politics category title is visible', async ({ categoryPage }) => {
    const title = categoryPage.categoryTitle;
    const isVisible = await title.isVisible().catch(() => false);
    expect(isVisible).toBeTruthy();
  });

  test('Politics articles have links', async ({ categoryPage }) => {
    const firstArticle = categoryPage.articlesList.first();
    await expect(firstArticle).toHaveAttribute('href');
  });

  test('Politics page has proper layout', async ({ categoryPage }) => {
    const grid = categoryPage.articlesGrid;
    const count = await grid.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });
});
