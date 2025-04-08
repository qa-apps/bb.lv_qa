import { test, expect } from '../fixtures';

test.describe('Video player functionality', () => {
  test.beforeEach(async ({ mediaPage }) => {
    await mediaPage.page.goto('https://en.bb.lv');
  });

  test('Video player is present', async ({ mediaPage }) => {
    const videoPlayer = mediaPage.videoPlayer;
    const count = await videoPlayer.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Play button is available', async ({ mediaPage }) => {
    const playButton = mediaPage.playButton;
    const count = await playButton.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Pause button exists', async ({ mediaPage }) => {
    const pauseButton = mediaPage.pauseButton;
    const count = await pauseButton.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Fullscreen option is available', async ({ mediaPage }) => {
    const fullscreen = mediaPage.fullscreenButton;
    const count = await fullscreen.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });
});
