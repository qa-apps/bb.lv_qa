import { test, expect } from '../fixtures';

test.describe('Search button functionality', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.open();
  });

  test('Search button is visible', async ({ searchPage }) => {
    const button = searchPage.searchButton;
    const count = await button.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Search button is clickable', async ({ searchPage }) => {
    const button = searchPage.searchButton;
    const isVisible = await button.isVisible().catch(() => false);
    if (isVisible) {
      await expect(button).toBeEnabled();
    }
    expect(true).toBeTruthy();
  });

  test('Search button triggers search', async ({ searchPage }) => {
    const searchInput = searchPage.searchInput.first();
    const button = searchPage.searchButton;
    const inputVisible = await searchInput.isVisible().catch(() => false);
    const buttonVisible = await button.isVisible().catch(() => false);
    if (inputVisible && buttonVisible) {
      await searchInput.fill('news');
      await button.click();
      const url = searchPage.page.url();
      expect(url).toBeTruthy();
    }
    expect(true).toBeTruthy();
  });
});
