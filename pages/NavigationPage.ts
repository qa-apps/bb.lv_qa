import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class NavigationPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  get mainMenu(): Locator {
    return this.page.locator('nav, [role="navigation"]').first();
  }

  get menuItems(): Locator {
    return this.mainMenu.locator('a');
  }

  get hamburgerMenu(): Locator {
    return this.page.getByRole('button', { name: /menu|navigation/i }).first();
  }

  get logo(): Locator {
    return this.page.locator('[class*="logo"] img, header img').first();
  }

  get topNavigation(): Locator {
    return this.page.locator('header nav, [class*="top-nav"]').first();
  }

  get sidebarMenu(): Locator {
    return this.page.locator('[class*="sidebar"], aside').first();
  }

  menuLink(name: string): Locator {
    return this.page.getByRole('link', { name: new RegExp(name, 'i') });
  }

  async clickMenuItem(itemName: string): Promise<void> {
    await this.menuLink(itemName).first().click();
  }

  get breadcrumbNav(): Locator {
    return this.page.locator('[class*="breadcrumb"]').first();
  }

  get dropdownMenus(): Locator {
    return this.page.locator('[class*="dropdown"], [aria-haspopup="true"]');
  }
}
