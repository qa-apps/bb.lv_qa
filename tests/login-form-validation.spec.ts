import { test, expect } from '../fixtures';

test.describe('Login form validation', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.openLogin();
  });

  test('Email field is required', async ({ loginPage }) => {
    await expect(loginPage.emailInput).toBeVisible();
  });

  test('Password field is required', async ({ loginPage }) => {
    await expect(loginPage.passwordInput).toBeVisible();
  });

  test('Sign in button is present', async ({ loginPage }) => {
    await expect(loginPage.signInButton).toBeVisible();
  });

  test('Remember me checkbox exists', async ({ loginPage }) => {
    const rememberMe = loginPage.page.getByText(/remember me/i).first();
    await expect(rememberMe).toBeVisible();
  });

  test('Forgot password link is accessible', async ({ loginPage }) => {
    await expect(loginPage.forgotPasswordLink).toBeVisible();
  });
});
