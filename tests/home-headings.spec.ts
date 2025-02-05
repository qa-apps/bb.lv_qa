import { test, expect } from '../fixtures';

test.describe('Home page main headings', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.open();
  });

  test('Politics link is present', async ({ homePage }) => {
    await expect(homePage.politicsLink).toBeVisible();
  });

  test('Our Latvia link is present', async ({ homePage }) => {
    await expect(homePage.ourLatviaLink).toBeVisible();
  });

  test('Emergencies and Crime link is present', async ({ homePage }) => {
    await expect(homePage.emergenciesLink).toBeVisible();
  });

  test('World News link is present', async ({ homePage }) => {
    await expect(homePage.worldNewsLink).toBeVisible();
  });

  test('Lifenews link is present', async ({ homePage }) => {
    await expect(homePage.lifenewsLink).toBeVisible();
  });

  test('Business link is present', async ({ homePage }) => {
    await expect(homePage.businessLink).toBeVisible();
  });

  test('Technologies link is present', async ({ homePage }) => {
    await expect(homePage.technologiesLink).toBeVisible();
  });

  test('Home and Garden link is present', async ({ homePage }) => {
    await expect(homePage.homeGardenLink).toBeVisible();
  });

  test('Food and Recipes link is present', async ({ homePage }) => {
    await expect(homePage.foodRecipesLink).toBeVisible();
  });

  test('In the Animal World link is present', async ({ homePage }) => {
    await expect(homePage.animalWorldLink).toBeVisible();
  });
});
