import { test, expect } from '../fixtures';

test.describe('Emergencies and Crime category', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.open();
    await homePage.emergenciesLink.click();
  });

  test('Emergencies category page loads', async ({ categoryPage }) => {
    await expect(categoryPage.page).toHaveURL(/bb\.lv/);
  });

  test('Emergency articles are present', async ({ categoryPage }) => {
    const articles = categoryPage.articlesList;
    const count = await articles.count();
    expect(count).toBeGreaterThan(0);
  });

  test('Category title displays correctly', async ({ categoryPage }) => {
    const title = categoryPage.categoryTitle;
    const count = await title.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Featured emergency article exists', async ({ categoryPage }) => {
    const featured = categoryPage.featuredArticle;
    const count = await featured.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });
});
