import { Page, Locator} from '@playwright/test';

export class LoginPage {
  private readonly page: Page;
  
  public readonly titlePage: Locator;
  public readonly emailField: Locator;
  public readonly passwordField: Locator;
  public readonly loginButton: Locator;
  public readonly toastLoginError: Locator;

  constructor(page: Page) {
    this.page = page;
    
    this.titlePage = page.locator('h1')
    this.emailField = page.locator('input[name="email"]');
    this.passwordField = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
    this.toastLoginError = page.getByRole('status')
  }

  async openLoginTestIt(): Promise<void> {
    await this.page.goto('login');
  }

  async authorizationTestUser(): Promise<void> {
    if (!process.env.TEST_USER_EMAIL || !process.env.TEST_USER_PASSWORD) {
      throw new Error('Test credentials are not set in environment variables');
    }

    await this.emailField.click();
    await this.emailField.fill(process.env.TEST_USER_EMAIL);
    await this.passwordField.click();
    await this.passwordField.fill(process.env.TEST_USER_PASSWORD);
    await this.loginButton.click();
  }

  async authorizationRandomUser(randomUser: { email: string; password: string }): Promise<void> {
    const { email, password } = randomUser;

    await this.emailField.click();
    await this.emailField.fill(email);
    await this.passwordField.click();
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }
}