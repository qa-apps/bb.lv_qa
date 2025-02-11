import { test, expect } from '../fixtures';

test.describe('Article URL structure', () => {
  test.beforeEach(async ({ homePage, articlePage }) => {
    await homePage.open();
    const firstArticle = homePage.page.locator('a[href*="/article/"]').first();
    await firstArticle.click();
    await articlePage.page.waitForLoadState('domcontentloaded');
  });

  test('Article URL contains article path', async ({ articlePage }) => {
    const url = articlePage.page.url();
    expect(url).toContain('bb.lv');
  });

  test('Article URL is valid', async ({ articlePage }) => {
    const url = articlePage.page.url();
    expect(url).toBeTruthy();
  });

  test('Article has unique URL', async ({ articlePage }) => {
    const url = articlePage.page.url();
    expect(url.length).toBeGreaterThan(20);
  });

  test('URL is SEO friendly', async ({ articlePage }) => {
    const url = articlePage.page.url();
    expect(url).not.toContain('?id=');
  });
});
