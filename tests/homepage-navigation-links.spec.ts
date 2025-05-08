import { test, expect } from '../fixtures';

test.describe('Homepage navigation links', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.open();
  });

  test('Politics link is visible', async ({ homePage }) => {
    const politics = homePage.politicsLink;
    const count = await politics.count();
    expect(count).toBeGreaterThan(0);
  });

  test('Business link is accessible', async ({ homePage }) => {
    const business = homePage.businessLink;
    const count = await business.count();
    expect(count).toBeGreaterThan(0);
  });

  test('World News link is present', async ({ homePage }) => {
    const worldNews = homePage.worldNewsLink;
    const count = await worldNews.count();
    expect(count).toBeGreaterThan(0);
  });

  test('Technologies link exists', async ({ homePage }) => {
    const tech = homePage.technologiesLink;
    const count = await tech.count();
    expect(count).toBeGreaterThan(0);
  });

  test('Lifenews link is available', async ({ homePage }) => {
    const lifenews = homePage.lifenewsLink;
    const count = await lifenews.count();
    expect(count).toBeGreaterThan(0);
  });
});
