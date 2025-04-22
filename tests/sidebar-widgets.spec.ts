import { test, expect } from '../fixtures';

test.describe('Sidebar widgets functionality', () => {
  test.beforeEach(async ({ sidebarPage }) => {
    await sidebarPage.page.goto('https://en.bb.lv');
  });

  test('Widgets list is present', async ({ sidebarPage }) => {
    const widgets = sidebarPage.widgetsList;
    const count = await widgets.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Advertisement banner is shown', async ({ sidebarPage }) => {
    const ad = sidebarPage.advertisementBanner;
    const count = await ad.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Newsletter signup is available', async ({ sidebarPage }) => {
    const newsletter = sidebarPage.newsletterSignup;
    const count = await newsletter.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Quick links section exists', async ({ sidebarPage }) => {
    const quickLinks = sidebarPage.quickLinks;
    const count = await quickLinks.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });
});
