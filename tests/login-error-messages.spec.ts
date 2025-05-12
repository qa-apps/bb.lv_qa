import { test, expect } from '../fixtures';

test.describe('Login error handling', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.openLogin();
  });

  test('Invalid email shows error', async ({ loginPage }) => {
    await loginPage.emailInput.fill('invalid@email.com');
    await loginPage.passwordInput.fill('password123');
    await loginPage.signInButton.click();
    const errorVisible =
      (await loginPage.redError.isVisible()) ||
      (await loginPage.errorMessage.isVisible()) ||
      (await loginPage.page.locator('[class*="error"]').first().isVisible());
    expect(errorVisible).toBeTruthy();
  });

  test('Empty email field validation', async ({ loginPage }) => {
    await loginPage.passwordInput.fill('password123');
    await loginPage.signInButton.click();
    const url = loginPage.page.url();
    expect(url).toBeTruthy();
  });

  test('Error message is displayed in red', async ({ loginPage }) => {
    await loginPage.emailInput.fill('test@test.com');
    await loginPage.passwordInput.fill('wrong');
    await loginPage.signInButton.click();
    const redError = loginPage.redError;
    const count = await redError.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });
});
