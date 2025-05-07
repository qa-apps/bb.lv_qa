import { test, expect } from '../fixtures';

test.describe('Homepage article display', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.open();
  });

  test('Articles have links', async ({ homePage }) => {
    const articles = homePage.page.locator('a[href*="/article/"]');
    const firstArticle = articles.first();
    await expect(firstArticle).toHaveAttribute('href');
  });

  test('Article links are clickable', async ({ homePage }) => {
    const articles = homePage.page.locator('a[href*="/article/"]');
    const firstArticle = articles.first();
    await expect(firstArticle).toBeEnabled();
  });

  test('Multiple articles are shown', async ({ homePage }) => {
    const articles = homePage.page.locator('a[href*="/article/"]');
    const count = await articles.count();
    expect(count).toBeGreaterThan(3);
  });

  test('Articles have text content', async ({ homePage }) => {
    const articles = homePage.page.locator('a[href*="/article/"]');
    const firstText = await articles.first().textContent();
    expect(firstText?.trim().length).toBeGreaterThan(0);
  });
});
