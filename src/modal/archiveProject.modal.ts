import { Page, Locator } from '@playwright/test';

export class ArchiveProjectModal {
  private readonly page: Page;

  public readonly yesToArchiveButton: Locator;



  constructor(page: Page) {
    this.page = page;
    
    this.yesToArchiveButton = page.locator('button[data-qa="danger-confirm-modal__button__1"]')
  }

  async clickYesToArchiveButton(): Promise<void> {
    await this.yesToArchiveButton.click()
  }
}