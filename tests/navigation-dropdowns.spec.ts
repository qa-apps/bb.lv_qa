import { test, expect } from '../fixtures';

test.describe('Navigation and category sections', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.open();
  });

  async function expectCategoryHasItems(page: { locator: (s: string) => { count: () => Promise<number> } }) {
    const articleLinks = page.locator('a[href*="/article/"]');
    const count = await articleLinks.count();
    expect(count).toBeGreaterThan(0);
  }

  test('Politics section has items', async ({ homePage }) => {
    await homePage.politicsLink.click();
    await expect(homePage.page).toHaveURL(/bb\.lv/);
    await expectCategoryHasItems(homePage.page);
  });

  test('Our Latvia section has items', async ({ homePage }) => {
    await homePage.ourLatviaLink.click();
    await expect(homePage.page).toHaveURL(/bb\.lv/);
    await expectCategoryHasItems(homePage.page);
  });

  test('Emergencies and Crime section has items', async ({ homePage }) => {
    await homePage.emergenciesLink.click();
    await expect(homePage.page).toHaveURL(/bb\.lv/);
    await expectCategoryHasItems(homePage.page);
  });

  test('World News section has items', async ({ homePage }) => {
    await homePage.worldNewsLink.click();
    await expect(homePage.page).toHaveURL(/bb\.lv/);
    await expectCategoryHasItems(homePage.page);
  });

  test('Business section has items', async ({ homePage }) => {
    await homePage.businessLink.click();
    await expect(homePage.page).toHaveURL(/bb\.lv/);
    await expectCategoryHasItems(homePage.page);
  });

  test('Technologies section has items', async ({ homePage }) => {
    await homePage.technologiesLink.click();
    await expect(homePage.page).toHaveURL(/bb\.lv/);
    await expectCategoryHasItems(homePage.page);
  });

  test('Home and Garden section has items', async ({ homePage }) => {
    await homePage.homeGardenLink.click();
    await expect(homePage.page).toHaveURL(/bb\.lv/);
    await expectCategoryHasItems(homePage.page);
  });

  test('Food and Recipes section has items', async ({ homePage }) => {
    await homePage.foodRecipesLink.click();
    await expect(homePage.page).toHaveURL(/bb\.lv/);
    await expectCategoryHasItems(homePage.page);
  });

  test('In the Animal World section has items', async ({ homePage }) => {
    await homePage.animalWorldLink.click();
    await expect(homePage.page).toHaveURL(/bb\.lv/);
    await expectCategoryHasItems(homePage.page);
  });
});
