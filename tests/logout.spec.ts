import { test, expect } from '../src/fixtures/app.fixtures.js';

test.beforeEach(async ({ app }) => {
    await app.cookieManager.setCookies()
    await app.cookieManager.setAuthCookies()
    await app.spacePage.openWorkSpacePage()
});


test('Успешный Выход из УЗ', async ({ app }) => {
    await app.spacePage.header.clickExitInDropDownMenu()
    await app.exitConfirmationPage.tapExitButton()
    await expect(app.loginPage.emailField).toBeVisible()
    await expect(app.loginPage.passwordField).toBeVisible()
});