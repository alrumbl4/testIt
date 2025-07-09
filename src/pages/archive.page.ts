import { Page, Locator } from '@playwright/test';
import { BasePage } from '../pages/base.page';

export class ArchivePage extends BasePage {

  public readonly dropDownMenu: Locator;
  public readonly restoreButton: Locator;
  public readonly deleteButton: Locator;
  public readonly toast: Locator;
  public readonly projectTitle: Locator;

  constructor(page: Page) {
    super(page);
    
    this.dropDownMenu = page.locator('button[data-qa="actions-archive-renderer__button"]')
    this.restoreButton = page.locator('li[data-qa="li-81"]')
    this.deleteButton = page.locator('li[baclick="CLICK_BUTTON_DELETE_PROJECT"]')
    this.toast = page.getByRole('status')
    this.projectTitle = page.locator('.flex-fill')

    
  }

  async openProjectPage(): Promise<void> {
    await this.page.goto('archive');
  }

  async clickRestoreButton(): Promise<void> {
    await this.dropDownMenu.click()
    await this.restoreButton.click()
  }

  async clickDeleteButton(): Promise<void> {
    await this.dropDownMenu.click()
    await this.deleteButton.click()
  }

  async waitToDisappearToast(): Promise<void> {
    await this.waitToDisappear(this.toast, { strict: true })
  }
}