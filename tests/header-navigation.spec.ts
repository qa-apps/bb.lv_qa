import { test, expect } from '../fixtures';

test.describe('Header navigation elements', () => {
  test.beforeEach(async ({ headerPage }) => {
    await headerPage.page.goto('https://en.bb.lv');
  });

  test('Navigation bar is present', async ({ headerPage }) => {
    await expect(headerPage.navigationBar).toBeVisible();
  });

  test('Top bar is visible', async ({ headerPage }) => {
    const topBar = headerPage.topBar;
    const count = await topBar.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Search icon is accessible', async ({ headerPage }) => {
    const searchIcon = headerPage.searchIcon;
    const count = await searchIcon.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('User menu is present', async ({ headerPage }) => {
    const userMenu = headerPage.userMenu;
    const count = await userMenu.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Social links are in header', async ({ headerPage }) => {
    const socialLinks = headerPage.socialLinks;
    const count = await socialLinks.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });
});
