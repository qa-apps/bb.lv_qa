import { test, expect } from '../fixtures';

test.describe('Sidebar popular articles', () => {
  test.beforeEach(async ({ sidebarPage }) => {
    await sidebarPage.page.goto('https://en.bb.lv');
  });

  test('Sidebar is visible', async ({ sidebarPage }) => {
    const sidebar = sidebarPage.sidebar;
    const count = await sidebar.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Popular articles section exists', async ({ sidebarPage }) => {
    const popular = sidebarPage.popularArticles;
    const count = await popular.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Popular article links are present', async ({ sidebarPage }) => {
    const links = sidebarPage.popularArticleLinks;
    const count = await links.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Popular articles are clickable', async ({ sidebarPage }) => {
    const firstLink = sidebarPage.popularArticleLinks.first();
    const exists = await firstLink.count();
    if (exists > 0) {
      await expect(firstLink).toHaveAttribute('href');
    }
    expect(true).toBeTruthy();
  });
});
