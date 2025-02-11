import { test, expect } from '../fixtures';

test.describe('Navigation dropdowns', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.open();
  });

  test('Politics dropdown opens and has items', async ({ homePage }) => {
    await homePage.openDropdown('Politics');
    const items = homePage.getDropdownItems();
    await expect(items.first()).toBeVisible({ timeout: 5000 });
    const count = await items.count();
    expect(count).toBeGreaterThan(0);
  });

  test('Our Latvia dropdown opens and has items', async ({ homePage }) => {
    await homePage.openDropdown('Our Latvia');
    const items = homePage.getDropdownItems();
    await expect(items.first()).toBeVisible({ timeout: 5000 });
    expect(await items.count()).toBeGreaterThan(0);
  });

  test('Emergencies and Crime dropdown opens and has items', async ({ homePage }) => {
    await homePage.openDropdown('Emergencies');
    const items = homePage.getDropdownItems();
    await expect(items.first()).toBeVisible({ timeout: 5000 });
    expect(await items.count()).toBeGreaterThan(0);
  });

  test('World News dropdown opens and has items', async ({ homePage }) => {
    await homePage.openDropdown('World News');
    const items = homePage.getDropdownItems();
    await expect(items.first()).toBeVisible({ timeout: 5000 });
    expect(await items.count()).toBeGreaterThan(0);
  });

  test('Business dropdown opens and has items', async ({ homePage }) => {
    await homePage.openDropdown('Business');
    const items = homePage.getDropdownItems();
    await expect(items.first()).toBeVisible({ timeout: 5000 });
    expect(await items.count()).toBeGreaterThan(0);
  });

  test('Technologies dropdown opens and has items', async ({ homePage }) => {
    await homePage.openDropdown('Technologies');
    const items = homePage.getDropdownItems();
    await expect(items.first()).toBeVisible({ timeout: 5000 });
    expect(await items.count()).toBeGreaterThan(0);
  });

  test('Home and Garden dropdown opens and has items', async ({ homePage }) => {
    await homePage.openDropdown('Home and Garden');
    const items = homePage.getDropdownItems();
    await expect(items.first()).toBeVisible({ timeout: 5000 });
    expect(await items.count()).toBeGreaterThan(0);
  });

  test('Food and Recipes dropdown opens and has items', async ({ homePage }) => {
    await homePage.openDropdown('Food');
    const items = homePage.getDropdownItems();
    await expect(items.first()).toBeVisible({ timeout: 5000 });
    expect(await items.count()).toBeGreaterThan(0);
  });

  test('In the Animal World dropdown opens and has items', async ({ homePage }) => {
    await homePage.openDropdown('Animal');
    const items = homePage.getDropdownItems();
    await expect(items.first()).toBeVisible({ timeout: 5000 });
    expect(await items.count()).toBeGreaterThan(0);
  });
});
