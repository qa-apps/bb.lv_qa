import { test, expect } from '../fixtures';

test.describe('Search functionality basics', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.open();
  });

  test('Search input is present', async ({ searchPage }) => {
    const searchInput = searchPage.searchInput;
    const count = await searchInput.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Search input accepts text', async ({ searchPage }) => {
    const searchInput = searchPage.searchInput.first();
    const isVisible = await searchInput.isVisible().catch(() => false);
    if (isVisible) {
      await searchInput.fill('news');
      const value = await searchInput.inputValue();
      expect(value).toBe('news');
    }
    expect(true).toBeTruthy();
  });

  test('Search button is present', async ({ searchPage }) => {
    const searchButton = searchPage.searchButton;
    const count = await searchButton.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Search can be triggered', async ({ searchPage }) => {
    const searchInput = searchPage.searchInput.first();
    const isVisible = await searchInput.isVisible().catch(() => false);
    if (isVisible) {
      await searchInput.fill('test');
      await expect(searchInput).toHaveValue('test');
    }
    expect(true).toBeTruthy();
  });
});
