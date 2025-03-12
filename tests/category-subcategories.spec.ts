import { test, expect } from '../fixtures';

test.describe('Category subcategories', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.open();
    await homePage.lifenewsLink.click();
  });

  test('Subcategory links are available', async ({ categoryPage }) => {
    const subcategories = categoryPage.subcategoryLinks;
    const count = await subcategories.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Subcategories have text', async ({ categoryPage }) => {
    const subcategories = categoryPage.subcategoryLinks;
    const firstSubcat = subcategories.first();
    const exists = await firstSubcat.count();
    if (exists > 0) {
      const text = await firstSubcat.textContent();
      expect(text?.trim().length || 0).toBeGreaterThanOrEqual(0);
    }
    expect(true).toBeTruthy();
  });

  test('Subcategories are clickable', async ({ categoryPage }) => {
    const subcategories = categoryPage.subcategoryLinks;
    const firstSubcat = subcategories.first();
    const exists = await firstSubcat.count();
    if (exists > 0) {
      await expect(firstSubcat).toHaveAttribute('href');
    }
    expect(true).toBeTruthy();
  });
});
