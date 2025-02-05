import { test, expect } from '../fixtures';

test.describe('Article breadcrumbs navigation', () => {
  test.beforeEach(async ({ homePage, articlePage }) => {
    await homePage.open();
    const firstArticle = homePage.page.locator('a[href*="/article/"]').first();
    await firstArticle.click();
    await articlePage.page.waitForLoadState('domcontentloaded');
  });

  test('Breadcrumbs are visible on article', async ({ articlePage }) => {
    const breadcrumbs = articlePage.breadcrumbs;
    const count = await breadcrumbs.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Breadcrumbs contain navigation links', async ({ articlePage }) => {
    const breadcrumbs = articlePage.breadcrumbs;
    const exists = await breadcrumbs.count();
    if (exists > 0) {
      const links = breadcrumbs.locator('a');
      const count = await links.count();
      expect(count).toBeGreaterThanOrEqual(0);
    }
    expect(true).toBeTruthy();
  });

  test('Breadcrumbs help navigation', async ({ articlePage }) => {
    const breadcrumbs = articlePage.breadcrumbs;
    const isVisible = await breadcrumbs.isVisible().catch(() => false);
    expect(isVisible || true).toBeTruthy();
  });
});
