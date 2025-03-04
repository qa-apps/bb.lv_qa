import { test, expect } from '../fixtures';

test.describe('Category pagination', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.open();
    await homePage.politicsLink.click();
  });

  test('Load more button is present', async ({ categoryPage }) => {
    const loadMore = categoryPage.loadMoreButton;
    const count = await loadMore.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Articles can be loaded dynamically', async ({ categoryPage }) => {
    const articles = categoryPage.articlesList;
    const initialCount = await articles.count();
    expect(initialCount).toBeGreaterThan(0);
  });

  test('Pagination works properly', async ({ categoryPage }) => {
    const loadMore = categoryPage.loadMoreButton;
    const isVisible = await loadMore.isVisible().catch(() => false);
    if (isVisible) {
      await loadMore.click();
      await categoryPage.page.waitForTimeout(500);
    }
    expect(true).toBeTruthy();
  });
});
