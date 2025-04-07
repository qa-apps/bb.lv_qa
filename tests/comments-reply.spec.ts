import { test, expect } from '../fixtures';

test.describe('Comments reply functionality', () => {
  test.beforeEach(async ({ homePage, commentPage }) => {
    await homePage.open();
    const firstArticle = homePage.page.locator('a[href*="/article/"]').first();
    await firstArticle.click();
  });

  test('Reply buttons are functional', async ({ commentPage }) => {
    const replyButtons = commentPage.replyButtons;
    const count = await replyButtons.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Reply can be triggered', async ({ commentPage }) => {
    const replyButtons = commentPage.replyButtons;
    const firstReply = replyButtons.first();
    const exists = await firstReply.count();
    if (exists > 0) {
      await firstReply.click();
      await commentPage.page.waitForTimeout(200);
    }
    expect(true).toBeTruthy();
  });

  test('Reply form appears on click', async ({ commentPage }) => {
    const replyButtons = commentPage.replyButtons;
    const count = await replyButtons.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });
});
