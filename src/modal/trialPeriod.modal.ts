import { Page, Locator } from '@playwright/test';

export class TrialPeriodModal {
  private readonly page: Page;

  public readonly okButton: Locator;



  constructor(page: Page) {
    this.page = page;
    
    this.okButton = page.getByRole('button', { name: 'ОК, хорошо!' });
  }

  async clickOkButton(): Promise<void> {
    await this.okButton.click()
  }
}