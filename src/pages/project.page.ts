import { Page, Locator } from '@playwright/test';
import { BasePage } from '../pages/base.page';

export class ProjectPage extends BasePage {

  public readonly noProjectsBlock: Locator;
  public readonly createProjectButton: Locator;
  public readonly projectTitle: Locator;
  public readonly dropDownMenu: Locator;
  public readonly archiveButton: Locator;
  public readonly toast: Locator;
  public readonly configurationsButton: Locator;
  public readonly createСonfigurationИutton: Locator;

  constructor(page: Page) {
    super(page);
    
    this.noProjectsBlock = page.locator('tms-empty-projects-placeholder')
    this.createProjectButton = page.locator('button[data-qa="empty-projects-placeholder__button"]');
    this.projectTitle = page.locator('.flex-fill')
    this.dropDownMenu = page.locator('button[data-qa="actions-renderer__button__9"]')
    this.archiveButton = page.locator('li[data-qa="li-181"]')
    this.toast = page.getByRole('status')
    this.configurationsButton = page.locator('li[data-qa="li-13"]')
    this.createСonfigurationИutton = page.locator('button[baclick="CLICK_BUTTON_CREATE_CONFIGURATION"]');
  }

  async openProjectPage(): Promise<void> {
    await this.page.goto('projects');
  }

  async clickCreateProjectButton(): Promise<void> {
    await this.createProjectButton.click()
  }

  async visibleProjectTitle(): Promise<void> {
    await this.shouldBeVisible(this.projectTitle)
  }

  async clickArchiveButton(): Promise<void> {
    await this.dropDownMenu.click()
    await this.archiveButton.click()
  }

  async waitToDisappearToast(): Promise<void> {
    await this.waitToDisappear(this.toast, { strict: true })
  }

  async goingToCreateConfiguration(): Promise<void> {
    await this.configurationsButton.click()
    await this.createСonfigurationИutton.click()
  }
}