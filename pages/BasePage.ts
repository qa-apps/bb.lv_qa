import { Page } from '@playwright/test';

const BASE_URL = 'https://en.bb.lv';

export class BasePage {
  constructor(protected page: Page) {}

  async goto(path = '') {
    await this.page.goto(`${BASE_URL}${path ? `/${path}` : ''}`);
  }
}
