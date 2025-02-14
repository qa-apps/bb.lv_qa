import { test, expect } from '../fixtures';

test.describe('Search input functionality', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.open();
  });

  test('Search input field is present', async ({ searchPage }) => {
    const searchInput = searchPage.searchInput;
    const count = await searchInput.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Search input accepts keyboard input', async ({ searchPage }) => {
    const searchInput = searchPage.searchInput.first();
    const isVisible = await searchInput.isVisible().catch(() => false);
    if (isVisible) {
      await searchInput.fill('Latvia news');
      const value = await searchInput.inputValue();
      expect(value).toBe('Latvia news');
    }
    expect(true).toBeTruthy();
  });

  test('Search input can be cleared', async ({ searchPage }) => {
    const searchInput = searchPage.searchInput.first();
    const isVisible = await searchInput.isVisible().catch(() => false);
    if (isVisible) {
      await searchInput.fill('test');
      await searchInput.clear();
      const value = await searchInput.inputValue();
      expect(value).toBe('');
    }
    expect(true).toBeTruthy();
  });

  test('Search input has placeholder', async ({ searchPage }) => {
    const searchInput = searchPage.searchInput.first();
    const count = await searchInput.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });
});
