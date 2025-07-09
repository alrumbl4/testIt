import { Page, Locator } from '@playwright/test';

export class RestoreProjectModal {
  private readonly page: Page;

  public readonly restoreButton: Locator;



  constructor(page: Page) {
    this.page = page;
    
    this.restoreButton = page.locator('button[data-qa="confirm-modal__button__1"]')
  }

  async clickRestoreButton(): Promise<void> {
    await this.restoreButton.click()
  }
}