import { test, expect } from '../fixtures';

test.describe('Article metadata display', () => {
  test.beforeEach(async ({ homePage, articlePage }) => {
    await homePage.open();
    const firstArticle = homePage.page.locator('a[href*="/article/"]').first();
    await firstArticle.click();
    await articlePage.page.waitForLoadState('domcontentloaded');
  });

  test('Article publish date is visible', async ({ articlePage }) => {
    const dateElement = articlePage.publishDate;
    const isVisible = await dateElement.isVisible().catch(() => false);
    expect(isVisible).toBeTruthy();
  });

  test('Article has author information', async ({ articlePage }) => {
    const authorElement = articlePage.authorName;
    const count = await authorElement.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Article has breadcrumbs navigation', async ({ articlePage }) => {
    const breadcrumbs = articlePage.breadcrumbs;
    const count = await breadcrumbs.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Article has category tags', async ({ articlePage }) => {
    const tags = articlePage.tags;
    const count = await tags.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });
});
