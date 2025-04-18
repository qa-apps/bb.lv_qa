import { test, expect } from '../fixtures';

test.describe('Weather information display', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.open();
  });

  test('Weather link is visible', async ({ homePage }) => {
    const weatherLink = homePage.weatherLink;
    const count = await weatherLink.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Temperature is displayed', async ({ weatherPage }) => {
    const temp = weatherPage.currentTemperature;
    const count = await temp.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Weather icon is present', async ({ weatherPage }) => {
    const icon = weatherPage.weatherIcon;
    const count = await icon.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Forecast section exists', async ({ weatherPage }) => {
    const forecast = weatherPage.forecast;
    const count = await forecast.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Weather description is shown', async ({ weatherPage }) => {
    const description = weatherPage.weatherDescription;
    const count = await description.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });
});
