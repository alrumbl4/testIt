import { Page, Locator } from '@playwright/test';

export class NewProjectModal {
  private readonly page: Page;

  public readonly titleProjectField: Locator;
  public readonly descriptionProjectField: Locator;
  public readonly createProjectButton: Locator;



  constructor(page: Page) {
    this.page = page;
    
    this.titleProjectField = page.locator('input[data-qa="input-20"]');
    this.descriptionProjectField = page.locator('textarea[data-qa="textarea-7"]');
    this.createProjectButton = page.getByRole('button', { name: 'Создать проект' });
  }

  async createNewRandomProject(randomProject: { titleProject: string; descriptionProject: string }): Promise<void> {
    const { titleProject, descriptionProject } = randomProject;
    await this.titleProjectField.click()
    await this.titleProjectField.fill(titleProject)
    await this.descriptionProjectField.click()
    await this.descriptionProjectField.fill(descriptionProject)
    await this.createProjectButton.click()
  }
}