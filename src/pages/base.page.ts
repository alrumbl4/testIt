import { Page, Locator, expect } from '@playwright/test';
import { HeaderComponent } from '../components/header.component';

export abstract class BasePage {
  public readonly header: HeaderComponent;

  constructor(protected readonly page: Page) {
    this.header = new HeaderComponent(page);
  }

  /**
   * Проверяет, что элемент виден на странице
   * @param locator - Локатор элемента
   * @param timeout - Таймаут ожидания в миллисекундах (по умолчанию 5000)
   */
  protected async shouldBeVisible(locator: Locator | string, timeout = 5000): Promise<void> {
    const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
    await expect(element).toBeVisible({ timeout });
  }

  /**
   * Ожидает исчезновение элемента (станет невидимым или удалится из DOM)
   * @param locator - Локатор элемента
   * @param options - Параметры ожидания: 
   *   timeout - Таймаут в миллисекундах (по умолчанию 5000)
   *   strict - Если true, проверяет полное удаление из DOM (по умолчанию false)
   */
  protected async waitToDisappear(
    locator: Locator | string,
    options: { timeout?: number; strict?: boolean } = {}
  ): Promise<void> {
    const { timeout = 5000, strict = false } = options;
    const element = typeof locator === 'string' ? this.page.locator(locator) : locator;

    if (strict) {
      // Строгая проверка - элемент должен полностью исчезнуть из DOM
      await expect(element).toHaveCount(0, { timeout });
    } else {
      // Нестрогая проверка - элемент может остаться в DOM, но должен стать невидимым
      await expect(element).toBeHidden({ timeout });
    }
  }
}