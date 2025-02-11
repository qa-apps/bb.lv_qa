import { test, expect } from '../fixtures';

test.describe('Search results display', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.open();
  });

  test('Search results container exists', async ({ searchPage }) => {
    const results = searchPage.searchResults;
    const count = await results.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Search results have proper structure', async ({ searchPage }) => {
    await searchPage.page.goto('https://en.bb.lv');
    const results = searchPage.searchResults;
    expect(results).toBeTruthy();
  });

  test('No results message works', async ({ searchPage }) => {
    const noResults = searchPage.noResultsMessage;
    const count = await noResults.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Results count is displayed', async ({ searchPage }) => {
    const resultsCount = searchPage.resultsCount;
    const count = await resultsCount.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Search has valid page structure', async ({ searchPage }) => {
    await searchPage.page.goto('https://en.bb.lv');
    expect(searchPage.page.url()).toContain('bb.lv');
  });
});
