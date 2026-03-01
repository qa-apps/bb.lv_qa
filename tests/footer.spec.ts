import { test, expect } from '../fixtures';

test.describe('Footer structure', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.open();
  });

  test('Footer is present', async ({ homePage }) => {
    await expect(homePage.footer).toBeVisible();
  });

  test('Footer contains Our Latvia', async ({ homePage }) => {
    await expect(homePage.footer.getByText(/our latvia/i)).toBeVisible();
  });

  test('Footer contains Emergencies and Crime', async ({ homePage }) => {
    await expect(homePage.footer.getByText(/emergencies|crime/i)).toBeVisible();
  });

  test('Footer contains Politics', async ({ homePage }) => {
    await expect(homePage.footer.getByText(/politics/i)).toBeVisible();
  });

  test('Footer contains Business', async ({ homePage }) => {
    await expect(homePage.footer.getByText(/business/i)).toBeVisible();
  });

  test('Footer contains Lifenews', async ({ homePage }) => {
    await expect(homePage.footer.getByText(/lifenews|life news/i)).toBeVisible();
  });

  test('Copyright is present', async ({ homePage }) => {
    await expect(homePage.copyright).toBeVisible();
  });
});
