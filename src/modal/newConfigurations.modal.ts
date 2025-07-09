import { Page, Locator } from '@playwright/test';

export class NewConfigurationsModal {
  private readonly page: Page;

  public readonly titleConfigurationsField: Locator;
  public readonly descriptionConfigurationsField: Locator;
  public readonly defaultСheckbox: Locator;
  public readonly keyParametersField: Locator;
  public readonly valueParametersField: Locator;
  public readonly value: Locator;
  public readonly saveButton: Locator;



  constructor(page: Page) {
    this.page = page;
    
    this.titleConfigurationsField = page.locator('input[data-qa="input-12"]');
    this.descriptionConfigurationsField = page.locator('textarea[data-qa="textarea-3"]');
    this.defaultСheckbox = page.locator('.ant-checkbox');
    this.keyParametersField = page.locator('nz-select-top-control').filter({ hasText: 'Выберите ключ' }).getByRole('textbox')
    this.valueParametersField = page.locator('nz-select-top-control').filter({ hasText: 'Выберите значение' }).getByRole('textbox')
    this.value = page.locator('nz-option-item')
    this.saveButton = page.locator('button[data-qa="create-configuration-modal__button__1"]')
  }

  async createNewConfiguration(configuration: { titleConfiguration: string; descriptionConfiguration: string; keyParametersConfiguration: string;
    valueParametersConfiguration: string
  }): Promise<void> {
    const { titleConfiguration, descriptionConfiguration, keyParametersConfiguration, valueParametersConfiguration } = configuration;
    await this.titleConfigurationsField.click()
    await this.titleConfigurationsField.fill(titleConfiguration)
    await this.descriptionConfigurationsField.click()
    await this.descriptionConfigurationsField.fill(descriptionConfiguration)
    await this.keyParametersField.click()
    await this.keyParametersField.fill(keyParametersConfiguration)
    await this.value.click()
    //TODO: Подумать как можно убрать доп ожидание
    await this.page.waitForTimeout(500)
    await this.valueParametersField.click()
    await this.valueParametersField.fill(valueParametersConfiguration)
    await this.value.click()
    //TODO: Подумать как можно убрать доп ожидание
    await this.page.waitForTimeout(500)
    await this.saveButton.click()
  }
}