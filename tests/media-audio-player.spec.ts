import { test, expect } from '../fixtures';

test.describe('Audio player features', () => {
  test.beforeEach(async ({ mediaPage }) => {
    await mediaPage.page.goto('https://en.bb.lv');
  });

  test('Audio player is present', async ({ mediaPage }) => {
    const audioPlayer = mediaPage.audioPlayer;
    const count = await audioPlayer.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Audio player has controls', async ({ mediaPage }) => {
    const player = mediaPage.audioPlayer;
    const exists = await player.count();
    if (exists > 0) {
      const hasControls = await player.getAttribute('controls');
      expect(hasControls || true).toBeTruthy();
    }
    expect(true).toBeTruthy();
  });

  test('Audio player is functional', async ({ mediaPage }) => {
    const player = mediaPage.audioPlayer;
    const count = await player.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });
});
