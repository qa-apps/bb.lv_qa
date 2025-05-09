import { test, expect } from '../fixtures';

test.describe('Footer category links', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.open();
  });

  test('Footer contains Politics link', async ({ homePage }) => {
    await expect(homePage.footer.getByText(/politics/i)).toBeVisible();
  });

  test('Footer contains Business link', async ({ homePage }) => {
    await expect(homePage.footer.getByText(/business/i)).toBeVisible();
  });

  test('Footer contains Lifenews link', async ({ homePage }) => {
    await expect(homePage.footer.getByText(/lifenews|life news/i)).toBeVisible();
  });

  test('Footer contains Our Latvia link', async ({ homePage }) => {
    await expect(homePage.footer.getByText(/our latvia/i)).toBeVisible();
  });

  test('Footer contains Emergencies link', async ({ homePage }) => {
    await expect(homePage.footer.getByText(/emergencies|crime/i)).toBeVisible();
  });
});
