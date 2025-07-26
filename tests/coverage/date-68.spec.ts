import { test, expect } from '../../fixtures';
test('smoke check 68', async ({ homePage }) => {
  await homePage.open();
  await expect(homePage.page).toHaveURL(/bb\.lv/);
});
