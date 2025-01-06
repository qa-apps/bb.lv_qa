import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class SidebarPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  get sidebar(): Locator {
    return this.page.locator('aside, [class*="sidebar"]').first();
  }

  get popularArticles(): Locator {
    return this.page.locator('[class*="popular"], [class*="trending"]').first();
  }

  get popularArticleLinks(): Locator {
    return this.popularArticles.locator('a');
  }

  get advertisementBanner(): Locator {
    return this.page.locator('[class*="banner"], [class*="ad"]').first();
  }

  get newsletterSignup(): Locator {
    return this.page.locator('[class*="newsletter"], form[action*="subscribe"]').first();
  }

  get emailInput(): Locator {
    return this.newsletterSignup.locator('input[type="email"]').first();
  }

  get subscribeButton(): Locator {
    return this.newsletterSignup.getByRole('button', { name: /subscribe|sign up/i }).first();
  }

  get widgetsList(): Locator {
    return this.sidebar.locator('[class*="widget"]');
  }

  get quickLinks(): Locator {
    return this.sidebar.locator('[class*="quick-link"] a, [class*="shortcut"] a');
  }
}
