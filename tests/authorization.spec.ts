import { test, expect } from '../src/fixtures/app.fixtures.js';

test.beforeEach(async ({ app }) => {
    await app.cookieManager.setCookies()
    await app.loginPage.openLoginTestIt()
});


test('Успешная авторизация ранее зарегистрированного пользователя', async ({ app }) => {
    await app.loginPage.authorizationTestUser()
    await expect(app.spacePage.headerPage).toHaveText('Пространства')
    await expect(app.spacePage.titleMySpace).toHaveText('mishka')
});

test('Невозможность авторизоваться с невалидными данными', async ({ app, usingRandomUser }) => {
    await app.loginPage.authorizationRandomUser(usingRandomUser)
    await expect(app.loginPage.toastLoginError).toBeVisible()
    await expect(app.loginPage.toastLoginError).toHaveText('Введен неверный адрес электронной почты или пароль.')
});