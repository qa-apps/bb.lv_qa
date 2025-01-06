import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class MediaPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  get videoPlayer(): Locator {
    return this.page.locator('video, [class*="video-player"], iframe[src*="youtube"]').first();
  }

  get playButton(): Locator {
    return this.page.getByRole('button', { name: /play/i }).first();
  }

  get pauseButton(): Locator {
    return this.page.getByRole('button', { name: /pause/i }).first();
  }

  get imageGallery(): Locator {
    return this.page.locator('[class*="gallery"], [class*="slideshow"]').first();
  }

  get galleryImages(): Locator {
    return this.page.locator('[class*="gallery"] img, [class*="slide"] img');
  }

  get nextImageButton(): Locator {
    return this.page.getByRole('button', { name: /next/i }).first();
  }

  get previousImageButton(): Locator {
    return this.page.getByRole('button', { name: /previous|prev/i }).first();
  }

  get fullscreenButton(): Locator {
    return this.page.getByRole('button', { name: /fullscreen/i }).first();
  }

  get thumbnails(): Locator {
    return this.page.locator('[class*="thumbnail"]');
  }

  get audioPlayer(): Locator {
    return this.page.locator('audio, [class*="audio-player"]').first();
  }
}
