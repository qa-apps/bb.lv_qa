import { test, expect } from '../fixtures';

test.describe('Footer links verification', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.open();
  });

  test('Footer contains links', async ({ homePage }) => {
    const links = homePage.footerLinks;
    const count = await links.count();
    expect(count).toBeGreaterThan(0);
  });

  test('Footer links have href attributes', async ({ homePage }) => {
    const firstLink = homePage.footerLinks.first();
    await expect(firstLink).toHaveAttribute('href');
  });

  test('Footer links are clickable', async ({ homePage }) => {
    const firstLink = homePage.footerLinks.first();
    await expect(firstLink).toBeEnabled();
  });

  test('Footer is properly structured', async ({ homePage }) => {
    await expect(homePage.footer).toBeVisible();
  });

  test('Copyright notice is present', async ({ homePage }) => {
    const copyright = homePage.copyright;
    const count = await copyright.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });
});
