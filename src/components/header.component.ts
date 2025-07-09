import { expect, Locator, Page } from '@playwright/test';

export class HeaderComponent {
  private readonly page: Page;

  private readonly profileIcon: Locator;
  private readonly exitButton: Locator;
  private readonly projectButton: Locator;
  private readonly archivetButton: Locator;
  private readonly projectSettingButton: Locator;

    constructor(page: Page) {
    this.page = page;
    
    this.profileIcon = page.locator('bc-user-actions');
    this.exitButton = page.locator('li[baclick="CLICK_BUTTON_LOGOUT"]')
    this.projectButton = page.locator('ui-navbar-routing-item[data-qa="item-6"]')
    this.archivetButton = page.locator('ui-navbar-routing-item[data-qa="item-11"]')
    this.projectSettingButton = page.locator('ui-navbar-routing-item[baclick="CLICK_PROJECTS_SETTINNGS_IN_MENU_WORKSPACE"]')

  }

  async clickExitInDropDownMenu(): Promise<void> {
    await this.profileIcon.click()
    await this.exitButton.click()
  }

  async clickProjectButton(): Promise<void> {
    await this.projectButton.click()
  }

  async clickArchiveButtton(): Promise<void> {
    await this.archivetButton.click()
  }

  async clickProjectSettingButton(): Promise<void> {
    await this.projectSettingButton.click()
  }
}