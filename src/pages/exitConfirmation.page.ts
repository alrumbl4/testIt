import { Page, Locator } from '@playwright/test';

export class ExitConfirmationePage {
  private readonly page: Page;

  public readonly titlePage: Locator;
  public readonly exitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    
    this.titlePage = page.getByRole('heading');
    this.exitButton = page.getByRole('button', { name: 'Выход' });
  }

  async tapExitButton(): Promise<void> {
    await this.exitButton.click()
  }
}