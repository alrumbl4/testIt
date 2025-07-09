import { Page, Locator } from '@playwright/test';
import { BasePage } from '../pages/base.page';

export class SpacePage extends BasePage {

  public readonly headerPage: Locator;
  public readonly titleMySpace: Locator;
  public readonly mySpaceCard: Locator;

  constructor(page: Page) {
    super(page);
    this.headerPage = page.locator('bc-page-content-header');
    this.titleMySpace = page.getByRole('heading');
    this.mySpaceCard = page.locator('a[baclick="CLICK_WORKSPACE_CARD"]')
  }

  async openWorkSpacePage(): Promise<void> {
    await this.page.goto('workspaces');
  }

  async clickMySpace(): Promise<void> {
    await this.mySpaceCard.click()
  }
}