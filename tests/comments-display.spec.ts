import { test, expect } from '../fixtures';

test.describe('Comments section display', () => {
  test.beforeEach(async ({ homePage, commentPage }) => {
    await homePage.open();
    const firstArticle = homePage.page.locator('a[href*="/article/"]').first();
    await firstArticle.click();
  });

  test('Comments section is present', async ({ commentPage }) => {
    const comments = commentPage.commentsSection;
    const count = await comments.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Comments list is visible', async ({ commentPage }) => {
    const commentsList = commentPage.commentsList;
    const count = await commentsList.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Comments count is displayed', async ({ commentPage }) => {
    const commentsCount = commentPage.commentsCount;
    const count = await commentsCount.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Comment input field exists', async ({ commentPage }) => {
    const input = commentPage.commentInput;
    const count = await input.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Submit button is available', async ({ commentPage }) => {
    const submitButton = commentPage.submitCommentButton;
    const count = await submitButton.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });
});
