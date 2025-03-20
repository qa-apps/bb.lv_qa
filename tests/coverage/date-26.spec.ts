import { test, expect } from '../../fixtures';
test('smoke check 26', async ({ homePage }) => {
  await homePage.open();
  await expect(homePage.page).toHaveURL(/bb\.lv/);
});
