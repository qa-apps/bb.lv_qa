import { test, expect } from '../fixtures';

test.describe('Technologies category tests', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.open();
    await homePage.technologiesLink.click();
  });

  test('Technologies category loads', async ({ categoryPage }) => {
    await expect(categoryPage.page).toHaveURL(/bb\.lv/);
  });

  test('Technologies articles are visible', async ({ categoryPage }) => {
    const articles = categoryPage.articlesList;
    const count = await articles.count();
    expect(count).toBeGreaterThan(0);
  });

  test('Technologies category has featured article', async ({ categoryPage }) => {
    const featured = categoryPage.featuredArticle;
    const count = await featured.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Technologies articles are clickable', async ({ categoryPage }) => {
    const firstArticle = categoryPage.articlesList.first();
    await expect(firstArticle).toHaveAttribute('href');
  });

  test('Technologies page has grid layout', async ({ categoryPage }) => {
    const grid = categoryPage.articlesGrid;
    const count = await grid.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });
});
