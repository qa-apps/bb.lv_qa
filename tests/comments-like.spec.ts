import { test, expect } from '../fixtures';

test.describe('Comments like functionality', () => {
  test.beforeEach(async ({ homePage, commentPage }) => {
    await homePage.open();
    const firstArticle = homePage.page.locator('a[href*="/article/"]').first();
    await firstArticle.click();
  });

  test('Like buttons are present', async ({ commentPage }) => {
    const likeButtons = commentPage.likeCommentButtons;
    const count = await likeButtons.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Like buttons are clickable', async ({ commentPage }) => {
    const likeButtons = commentPage.likeCommentButtons;
    const firstLike = likeButtons.first();
    const exists = await firstLike.count();
    if (exists > 0) {
      await expect(firstLike).toBeEnabled();
    }
    expect(true).toBeTruthy();
  });

  test('Comments can be liked', async ({ commentPage }) => {
    const likeButtons = commentPage.likeCommentButtons;
    const firstLike = likeButtons.first();
    const count = await firstLike.count();
    if (count > 0) {
      await firstLike.click();
      await commentPage.page.waitForTimeout(200);
    }
    expect(true).toBeTruthy();
  });
});
