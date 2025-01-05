import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CommentPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  get commentsSection(): Locator {
    return this.page.locator('[class*="comment"], #comments, [id*="comment"]').first();
  }

  get commentsList(): Locator {
    return this.page.locator('[class*="comment-item"], [class*="comment-list"] > *');
  }

  get commentInput(): Locator {
    return this.page.locator('textarea[name*="comment"], [placeholder*="comment"]').first();
  }

  get submitCommentButton(): Locator {
    return this.page.getByRole('button', { name: /submit|post|send/i }).first();
  }

  get commentsCount(): Locator {
    return this.page.locator('[class*="comment-count"], [class*="comments-number"]').first();
  }

  get replyButtons(): Locator {
    return this.page.getByRole('button', { name: /reply/i });
  }

  get likeCommentButtons(): Locator {
    return this.page.locator('[class*="comment"] [class*="like"], [aria-label*="like"]');
  }

  async postComment(text: string): Promise<void> {
    await this.commentInput.fill(text);
    await this.submitCommentButton.click();
  }

  get sortComments(): Locator {
    return this.page.locator('select[name*="sort"], [class*="comment-sort"]').first();
  }

  get commentAuthors(): Locator {
    return this.page.locator('[class*="comment-author"], [class*="comment"] [class*="author"]');
  }
}
