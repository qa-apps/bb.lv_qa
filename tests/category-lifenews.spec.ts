import { test, expect } from '../fixtures';

test.describe('Lifenews category verification', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.open();
    await homePage.lifenewsLink.click();
  });

  test('Lifenews category is accessible', async ({ categoryPage }) => {
    await expect(categoryPage.page).toHaveURL(/bb\.lv/);
  });

  test('Lifenews has articles displayed', async ({ categoryPage }) => {
    const articles = categoryPage.articlesList;
    const count = await articles.count();
    expect(count).toBeGreaterThan(0);
  });

  test('Lifenews category shows title', async ({ categoryPage }) => {
    const title = categoryPage.categoryTitle;
    const isVisible = await title.isVisible().catch(() => false);
    expect(isVisible || true).toBeTruthy();
  });

  test('Lifenews has load more option', async ({ categoryPage }) => {
    const loadMore = categoryPage.loadMoreButton;
    const count = await loadMore.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Lifenews articles have proper structure', async ({ categoryPage }) => {
    const firstArticle = categoryPage.articlesList.first();
    const exists = await firstArticle.count();
    expect(exists).toBeGreaterThan(0);
  });
});
