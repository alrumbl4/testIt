import { Page, Locator } from '@playwright/test';
import { BasePage } from '../pages/base.page';

export class ProjectSettingPage extends BasePage {

  public readonly dropDownMenu: Locator;
  public readonly deleteButton: Locator;
  public readonly toast: Locator;

  constructor(page: Page) {
    super(page);
    
    this.dropDownMenu = page.locator('button[data-qa="actions-renderer__button"]').first()
    this.deleteButton = page.locator('li[data-qa="li-177"]')
    this.toast = page.getByRole('status')
  }

  async deleteConfiguretion(): Promise<void> {
    await this.dropDownMenu.click()
    await this.deleteButton.click()
  }

  async waitToDisappearToast(): Promise<void> {
    await this.waitToDisappear(this.toast, { strict: true })
  }
}