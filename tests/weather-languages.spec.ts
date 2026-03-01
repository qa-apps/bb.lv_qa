import { test, expect } from '../fixtures';

test.describe('Weather and languages', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.open();
  });

  test('Weather or temperature is present on page', async ({ homePage }) => {
    const weatherOrTemp = homePage.page.getByText(/weather|°C|°С|\d+°|temperature/i).first();
    await expect(weatherOrTemp).toBeVisible();
  });

  test('Page has language or locale indicators', async ({ homePage }) => {
    const hasLang = await homePage.page.locator('html').getAttribute('lang') ||
      (await homePage.page.locator('a[href*="bb.lv"]').count()) > 0;
    expect(hasLang).toBeTruthy();
  });
});
