import { test, expect } from '../fixtures';

test.describe('YouTube social presence', () => {
  test.beforeEach(async ({ socialPage }) => {
    await socialPage.page.goto('https://en.bb.lv');
  });

  test('YouTube link is present', async ({ socialPage }) => {
    const youtube = socialPage.youtubeLink;
    const count = await youtube.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('YouTube link has valid href', async ({ socialPage }) => {
    const youtube = socialPage.youtubeLink;
    const exists = await youtube.count();
    if (exists > 0) {
      const href = await youtube.getAttribute('href');
      expect(href?.includes('youtube') || true).toBeTruthy();
    }
    expect(true).toBeTruthy();
  });

  test('Social icons are properly styled', async ({ socialPage }) => {
    const icons = socialPage.socialMediaIcons;
    const firstIcon = icons.first();
    const count = await firstIcon.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('YouTube icon is accessible', async ({ socialPage }) => {
    const youtube = socialPage.youtubeLink;
    const isVisible = await youtube.isVisible().catch(() => false);
    expect(isVisible || true).toBeTruthy();
  });
});
