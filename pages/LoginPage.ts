import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  get emailInput(): Locator {
    return this.page.getByLabel(/email|e-mail|login/i).or(
      this.page.locator('input[type="email"], input[name*="email"], input[name*="login"]').first()
    );
  }

  get passwordInput(): Locator {
    return this.page.getByLabel(/password/i).or(
      this.page.locator('input[type="password"]').first()
    );
  }

  get signInButton(): Locator {
    return this.page.getByRole('button', { name: /sign in|log in|login|submit/i }).first();
  }

  get rememberMe(): Locator {
    return this.page.getByLabel(/remember me|remember/i).or(
      this.page.locator('input[type="checkbox"]').first()
    );
  }

  get forgotPasswordLink(): Locator {
    return this.page.getByRole('link', { name: /forgot password|forgotten password/i })
      .or(this.page.getByText(/forgot password/i)).first();
  }

  get authHeading(): Locator {
    return this.page.getByRole('heading', { name: /log in|sign in|authorization|login/i }).first();
  }

  get errorMessage(): Locator {
    return this.page.locator('[class*="error"], [role="alert"], .error-message').filter({
      has: this.page.locator('text=/invalid|error|incorrect|wrong/i'),
    }).or(this.page.getByText(/invalid|error|incorrect|wrong/i)).first();
  }

  get redError(): Locator {
    return this.page.locator('[style*="color: red"], [style*="color:red"], .text-red, [class*="error"]').filter({
      hasText: /.+/,
    }).first();
  }

  async openLogin(): Promise<void> {
    await this.goto();
    const loginLink = this.page.getByRole('link', { name: /log in|login|sign in/i }).first();
    if (await loginLink.isVisible()) {
      await loginLink.click();
    }
  }

  async submitDummyLogin(): Promise<void> {
    await this.emailInput.fill('dummy@example.com');
    await this.passwordInput.fill('wrongpassword');
    await this.signInButton.click();
  }
}
