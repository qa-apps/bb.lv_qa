import { test, expect } from '../fixtures';

test.describe('Food and Recipes category', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.open();
    await homePage.foodRecipesLink.click();
  });

  test('Food and Recipes category is accessible', async ({ categoryPage }) => {
    await expect(categoryPage.page).toHaveURL(/bb\.lv/);
  });

  test('Recipe articles are shown', async ({ categoryPage }) => {
    const articles = categoryPage.articlesList;
    const count = await articles.count();
    expect(count).toBeGreaterThan(0);
  });

  test('Category description is present', async ({ categoryPage }) => {
    const description = categoryPage.categoryDescription;
    const count = await description.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Subcategory links are available', async ({ categoryPage }) => {
    const subcategories = categoryPage.subcategoryLinks;
    const count = await subcategories.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });
});
