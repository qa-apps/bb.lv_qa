import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CategoryPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  get categoryTitle(): Locator {
    return this.page.locator('h1, [class*="category-title"]').first();
  }

  get articlesList(): Locator {
    return this.page.locator('a[href*="/article/"], [class*="article-item"]');
  }

  get featuredArticle(): Locator {
    return this.page.locator('[class*="featured"], [class*="highlight"]').first();
  }

  get subcategoryLinks(): Locator {
    return this.page.locator('[class*="subcategory"] a, [class*="sub-menu"] a');
  }

  get loadMoreButton(): Locator {
    return this.page.getByRole('button', { name: /load more|show more/i }).first();
  }

  get articleThumbnails(): Locator {
    return this.page.locator('[class*="thumbnail"] img, [class*="preview"] img');
  }

  async openCategory(categoryName: string): Promise<void> {
    await this.goto(`category/${categoryName}`);
  }

  get articlesGrid(): Locator {
    return this.page.locator('[class*="grid"], [class*="list"]').first();
  }

  get categoryDescription(): Locator {
    return this.page.locator('[class*="description"], [class*="intro"]').first();
  }
}
