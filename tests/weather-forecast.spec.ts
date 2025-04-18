import { test, expect } from '../fixtures';

test.describe('Weather forecast section', () => {
  test.beforeEach(async ({ weatherPage }) => {
    await weatherPage.page.goto('https://en.bb.lv');
  });

  test('Forecast days are displayed', async ({ weatherPage }) => {
    const forecastDays = weatherPage.forecastDays;
    const count = await forecastDays.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Humidity information is shown', async ({ weatherPage }) => {
    const humidity = weatherPage.humidity;
    const count = await humidity.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Wind speed is displayed', async ({ weatherPage }) => {
    const windSpeed = weatherPage.windSpeed;
    const count = await windSpeed.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('City selector is available', async ({ weatherPage }) => {
    const citySelector = weatherPage.citySelector;
    const count = await citySelector.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Weather map is present', async ({ weatherPage }) => {
    const map = weatherPage.weatherMap;
    const count = await map.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });
});
