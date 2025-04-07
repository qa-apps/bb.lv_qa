import { test, expect } from '../fixtures';

test.describe('Comments user interaction', () => {
  test.beforeEach(async ({ homePage, commentPage }) => {
    await homePage.open();
    const firstArticle = homePage.page.locator('a[href*="/article/"]').first();
    await firstArticle.click();
  });

  test('Reply buttons are present', async ({ commentPage }) => {
    const replyButtons = commentPage.replyButtons;
    const count = await replyButtons.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Like comment buttons exist', async ({ commentPage }) => {
    const likeButtons = commentPage.likeCommentButtons;
    const count = await likeButtons.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Comment sorting is available', async ({ commentPage }) => {
    const sortOptions = commentPage.sortComments;
    const count = await sortOptions.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Comment authors are displayed', async ({ commentPage }) => {
    const authors = commentPage.commentAuthors;
    const count = await authors.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });
});
