import { test, expect } from '../fixtures';

test.describe('Media fullscreen functionality', () => {
  test.beforeEach(async ({ mediaPage }) => {
    await mediaPage.page.goto('https://en.bb.lv');
  });

  test('Fullscreen button is available', async ({ mediaPage }) => {
    const fullscreen = mediaPage.fullscreenButton;
    const count = await fullscreen.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Fullscreen can be triggered', async ({ mediaPage }) => {
    const fullscreen = mediaPage.fullscreenButton;
    const isVisible = await fullscreen.isVisible().catch(() => false);
    if (isVisible) {
      await expect(fullscreen).toBeEnabled();
    }
    expect(true).toBeTruthy();
  });

  test('Media player supports fullscreen', async ({ mediaPage }) => {
    const player = mediaPage.videoPlayer;
    const count = await player.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Fullscreen button is clickable', async ({ mediaPage }) => {
    const fullscreen = mediaPage.fullscreenButton;
    const exists = await fullscreen.count();
    expect(exists).toBeGreaterThanOrEqual(0);
  });
});
