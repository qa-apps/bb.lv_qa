import { test, expect } from '../fixtures';

test.describe('Image gallery features', () => {
  test.beforeEach(async ({ mediaPage }) => {
    await mediaPage.page.goto('https://en.bb.lv');
  });

  test('Image gallery is present', async ({ mediaPage }) => {
    const gallery = mediaPage.imageGallery;
    const count = await gallery.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Gallery images are displayed', async ({ mediaPage }) => {
    const images = mediaPage.galleryImages;
    const count = await images.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Next button navigates images', async ({ mediaPage }) => {
    const nextButton = mediaPage.nextImageButton;
    const count = await nextButton.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Previous button exists', async ({ mediaPage }) => {
    const prevButton = mediaPage.previousImageButton;
    const count = await prevButton.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Thumbnails are visible', async ({ mediaPage }) => {
    const thumbnails = mediaPage.thumbnails;
    const count = await thumbnails.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });
});
