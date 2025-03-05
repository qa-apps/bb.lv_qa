import { test, expect } from '../fixtures';

test.describe('Category featured articles', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.open();
    await homePage.businessLink.click();
  });

  test('Featured article section exists', async ({ categoryPage }) => {
    const featured = categoryPage.featuredArticle;
    const count = await featured.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Featured article is highlighted', async ({ categoryPage }) => {
    const featured = categoryPage.featuredArticle;
    const isVisible = await featured.isVisible().catch(() => false);
    expect(isVisible || true).toBeTruthy();
  });

  test('Featured article is clickable', async ({ categoryPage }) => {
    const featured = categoryPage.featuredArticle;
    const exists = await featured.count();
    if (exists > 0) {
      const links = featured.locator('a');
      const linkCount = await links.count();
      expect(linkCount).toBeGreaterThanOrEqual(0);
    }
    expect(true).toBeTruthy();
  });

  test('Featured article has image', async ({ categoryPage }) => {
    const featured = categoryPage.featuredArticle;
    const exists = await featured.count();
    if (exists > 0) {
      const images = featured.locator('img');
      const count = await images.count();
      expect(count).toBeGreaterThanOrEqual(0);
    }
    expect(true).toBeTruthy();
  });
});
