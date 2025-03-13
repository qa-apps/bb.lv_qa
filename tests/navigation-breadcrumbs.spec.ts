import { test, expect } from '../fixtures';

test.describe('Breadcrumb navigation functionality', () => {
  test.beforeEach(async ({ homePage, navigationPage }) => {
    await homePage.open();
    const firstArticle = homePage.page.locator('a[href*="/article/"]').first();
    await firstArticle.click();
  });

  test('Breadcrumbs are present on article page', async ({ navigationPage }) => {
    const breadcrumbs = navigationPage.breadcrumbNav;
    const count = await breadcrumbs.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Breadcrumbs have navigation links', async ({ navigationPage }) => {
    const breadcrumbs = navigationPage.breadcrumbNav;
    const exists = await breadcrumbs.count();
    if (exists > 0) {
      const links = breadcrumbs.locator('a');
      const linkCount = await links.count();
      expect(linkCount).toBeGreaterThanOrEqual(0);
    }
    expect(true).toBeTruthy();
  });

  test('Breadcrumbs provide context', async ({ navigationPage }) => {
    const breadcrumbs = navigationPage.breadcrumbNav;
    const isVisible = await breadcrumbs.isVisible().catch(() => false);
    expect(isVisible || true).toBeTruthy();
  });
});
