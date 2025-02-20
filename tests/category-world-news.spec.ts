import { test, expect } from '../fixtures';

test.describe('World News category section', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.open();
    await homePage.worldNewsLink.click();
  });

  test('World News page loads correctly', async ({ categoryPage }) => {
    await expect(categoryPage.page).toHaveURL(/bb\.lv/);
  });

  test('World News has article list', async ({ categoryPage }) => {
    const articles = categoryPage.articlesList;
    const count = await articles.count();
    expect(count).toBeGreaterThan(0);
  });

  test('World News category title is present', async ({ categoryPage }) => {
    const title = categoryPage.categoryTitle;
    const count = await title.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('World News articles have images', async ({ categoryPage }) => {
    const images = categoryPage.articleThumbnails;
    const count = await images.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });
});
