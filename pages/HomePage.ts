import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open() {
    await this.goto();
  }

  get navLink(name: string): Locator {
    return this.page.getByRole('link', { name: new RegExp(name, 'i') }).first();
  }

  get headerNav(): Locator {
    return this.page.locator('header nav, [class*="nav"], .header-nav').first();
  }

  get politicsLink(): Locator {
    return this.page.getByRole('link', { name: /politics/i }).first();
  }

  get ourLatviaLink(): Locator {
    return this.page.getByRole('link', { name: /our latvia/i }).first();
  }

  get emergenciesLink(): Locator {
    return this.page.getByRole('link', { name: /emergencies|crime/i }).first();
  }

  get worldNewsLink(): Locator {
    return this.page.getByRole('link', { name: /world news/i }).first();
  }

  get lifenewsLink(): Locator {
    return this.page.getByRole('link', { name: /lifenews|life news/i }).first();
  }

  get businessLink(): Locator {
    return this.page.getByRole('link', { name: /business/i }).first();
  }

  get weatherLink(): Locator {
    return this.page.getByRole('link', { name: /weather/i }).or(
      this.page.locator('text=/weather|°C|°С/').first()
    ).first();
  }

  get technologiesLink(): Locator {
    return this.page.getByRole('link', { name: /technologies/i }).first();
  }

  get homeGardenLink(): Locator {
    return this.page.getByRole('link', { name: /home and garden/i }).first();
  }

  get foodRecipesLink(): Locator {
    return this.page.getByRole('link', { name: /food and recipes|food & recipes/i }).first();
  }

  get animalWorldLink(): Locator {
    return this.page.getByRole('link', { name: /animal world|in the animal world/i }).first();
  }

  get womanLink(): Locator {
    return this.page.getByRole('link', { name: /woman/i }).first();
  }

  get loginLink(): Locator {
    return this.page.getByRole('link', { name: /log in|login|sign in/i }).first();
  }

  get footer(): Locator {
    return this.page.locator('footer').first();
  }

  get footerLinks(): Locator {
    return this.footer.getByRole('link');
  }

  get copyright(): Locator {
    return this.page.getByText(/copyright|©|all rights reserved/i).first();
  }

  get languageSwitcher(): Locator {
    return this.page.locator('a[href*="bb.lv"], [class*="lang"], [class*="language"]').first();
  }

  get dropdownTrigger(name: string): Locator {
    return this.page.getByRole('button', { name: new RegExp(name, 'i') })
      .or(this.page.getByRole('link', { name: new RegExp(name, 'i') })).first();
  }

  async openDropdown(menuName: string): Promise<void> {
    const trigger = this.dropdownTrigger(menuName);
    await trigger.click();
  }

  getDropdownItems(container?: Locator): Locator {
    const base = container || this.page;
    return base.locator('[class*="dropdown"] a, [class*="menu"] a, [role="menu"] a');
  }
}
