import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HeaderPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  get header(): Locator {
    return this.page.locator('header').first();
  }

  get siteLogo(): Locator {
    return this.header.locator('img, [class*="logo"]').first();
  }

  get topBar(): Locator {
    return this.page.locator('[class*="top-bar"], [class*="header-top"]').first();
  }

  get navigationBar(): Locator {
    return this.header.locator('nav').first();
  }

  get searchIcon(): Locator {
    return this.header.getByRole('button', { name: /search/i }).first();
  }

  get userMenu(): Locator {
    return this.header.locator('[class*="user-menu"], [aria-label*="user"]').first();
  }

  get languageSwitcher(): Locator {
    return this.header.locator('[class*="lang"], a[href*="bb.lv"]').first();
  }

  get dateDisplay(): Locator {
    return this.header.locator('[class*="date"], time').first();
  }

  get socialLinks(): Locator {
    return this.header.locator('[class*="social"] a');
  }

  async clickLogo(): Promise<void> {
    await this.siteLogo.click();
  }
}
