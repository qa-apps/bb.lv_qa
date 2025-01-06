import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class WeatherPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async openWeather(): Promise<void> {
    await this.goto('weather');
  }

  get currentTemperature(): Locator {
    return this.page.locator('[class*="temperature"], [class*="temp"]').first();
  }

  get weatherIcon(): Locator {
    return this.page.locator('[class*="weather-icon"], [class*="weather"] img').first();
  }

  get forecast(): Locator {
    return this.page.locator('[class*="forecast"]').first();
  }

  get forecastDays(): Locator {
    return this.page.locator('[class*="forecast"] [class*="day"]');
  }

  get humidity(): Locator {
    return this.page.getByText(/humidity/i).first();
  }

  get windSpeed(): Locator {
    return this.page.getByText(/wind/i).first();
  }

  get weatherDescription(): Locator {
    return this.page.locator('[class*="description"], [class*="condition"]').first();
  }

  get citySelector(): Locator {
    return this.page.locator('select[name*="city"], [class*="city-select"]').first();
  }

  get weatherMap(): Locator {
    return this.page.locator('[class*="map"], #map').first();
  }
}
