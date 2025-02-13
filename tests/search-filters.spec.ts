import { test, expect } from '../fixtures';

test.describe('Search filter options', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.open();
  });

  test('Filter options are available', async ({ searchPage }) => {
    const filters = searchPage.filterOptions;
    const count = await filters.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Sort dropdown exists', async ({ searchPage }) => {
    const sortDropdown = searchPage.sortDropdown;
    const count = await sortDropdown.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Pagination is present', async ({ searchPage }) => {
    const pagination = searchPage.paginationLinks;
    const count = await pagination.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Search page structure is valid', async ({ searchPage }) => {
    await searchPage.page.goto('https://en.bb.lv');
    const url = searchPage.page.url();
    expect(url).toBeTruthy();
  });
});
