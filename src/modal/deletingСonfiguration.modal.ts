import { Page, Locator } from '@playwright/test';

export class DeleteConfigurationtModal {
  private readonly page: Page;

  public readonly deleteButton: Locator;



  constructor(page: Page) {
    this.page = page;
    
    this.deleteButton = page.locator('button[data-qa="danger-confirm-modal__button__1"]')
  }

  async clickDeleteButton(): Promise<void> {
    await this.deleteButton.click()
  }
}