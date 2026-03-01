import { test, expect } from '../fixtures';

test.describe('Login page', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.openLogin();
  });

  test('Login page has authorization or sign-in', async ({ loginPage }) => {
    const hasFormOrLink = await loginPage.emailInput.isVisible().catch(() => false) ||
      await loginPage.passwordInput.isVisible().catch(() => false) ||
      await loginPage.page.getByRole('link', { name: /log in|login|sign in/i }).first().isVisible().catch(() => false);
    expect(hasFormOrLink).toBeTruthy();
  });

  test('Login page has email field', async ({ loginPage }) => {
    await expect(loginPage.emailInput).toBeVisible();
  });

  test('Login page has Remember me', async ({ loginPage }) => {
    await expect(loginPage.page.getByText(/remember me/i).first()).toBeVisible();
  });

  test('Login page has Forgot password', async ({ loginPage }) => {
    await expect(loginPage.forgotPasswordLink).toBeVisible();
  });

  test('Dummy email shows error in red or error message', async ({ loginPage }) => {
    await loginPage.emailInput.fill('dummy@example.com');
    await loginPage.passwordInput.fill('wrongpass');
    await loginPage.signInButton.click();
    const errorVisible =
      (await loginPage.redError.isVisible()) ||
      (await loginPage.errorMessage.isVisible()) ||
      (await loginPage.page.locator('[class*="error"], [style*="red"]').filter({ hasText: /.+/ }).first().isVisible());
    expect(errorVisible).toBeTruthy();
  });
});
