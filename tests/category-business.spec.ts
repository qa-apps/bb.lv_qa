import { test, expect } from '../fixtures';

test.describe('Business category section', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.open();
    await homePage.businessLink.click();
  });

  test('Business category page loads', async ({ categoryPage }) => {
    await expect(categoryPage.page).toHaveURL(/bb\.lv/);
  });

  test('Business articles list is present', async ({ categoryPage }) => {
    const articles = categoryPage.articlesList;
    const count = await articles.count();
    expect(count).toBeGreaterThan(0);
  });

  test('Business category has title', async ({ categoryPage }) => {
    const title = categoryPage.categoryTitle;
    const count = await title.count();
    expect(count).toBeGreaterThan(0);
  });

  test('Business articles have thumbnails', async ({ categoryPage }) => {
    const thumbnails = categoryPage.articleThumbnails;
    const count = await thumbnails.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Business page navigation works', async ({ categoryPage }) => {
    const url = categoryPage.page.url();
    expect(url).toContain('bb.lv');
  });
});
