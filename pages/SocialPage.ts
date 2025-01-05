import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class SocialPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  get facebookLink(): Locator {
    return this.page.locator('a[href*="facebook.com"]').first();
  }

  get twitterLink(): Locator {
    return this.page.locator('a[href*="twitter.com"], a[href*="x.com"]').first();
  }

  get instagramLink(): Locator {
    return this.page.locator('a[href*="instagram.com"]').first();
  }

  get youtubeLink(): Locator {
    return this.page.locator('a[href*="youtube.com"]').first();
  }

  get socialMediaIcons(): Locator {
    return this.page.locator('[class*="social"] a, [aria-label*="social"]');
  }

  get shareButton(): Locator {
    return this.page.getByRole('button', { name: /share/i }).first();
  }

  get likeButton(): Locator {
    return this.page.getByRole('button', { name: /like/i }).first();
  }

  get socialSharePanel(): Locator {
    return this.page.locator('[class*="share-panel"], [class*="social-share"]').first();
  }

  get telegramLink(): Locator {
    return this.page.locator('a[href*="t.me"], a[href*="telegram"]').first();
  }

  get linkedinLink(): Locator {
    return this.page.locator('a[href*="linkedin.com"]').first();
  }
}
