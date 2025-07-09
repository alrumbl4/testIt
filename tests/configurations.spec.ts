import { test, expect } from '../src/fixtures/app.fixtures.js';

test.describe('Создание конфигурации', () => {
  test.beforeEach(async ({ app, usingRandomProject }) => {
    await app.cookieManager.setCookies();
    await app.loginPage.openLoginTestIt();
    await app.loginPage.authorizationTestUser();
    await app.spacePage.clickMySpace();
    await app.trialPeriodModal.clickOkButton();
    await app.projectPage.clickCreateProjectButton();
    await app.newProjectModal.createNewRandomProject(usingRandomProject);
    await app.projectPage.visibleProjectTitle()
  });

  test('Успешное создание новой конфигурации проекта', async ({ app, usingNewConfiguration }) => {
    await app.projectPage.goingToCreateConfiguration()
    await app.newConfigurationsModal.createNewConfiguration(usingNewConfiguration({title: "test1",description: "test", keyParams: "test1", valueParams: "test2"}))
    await expect(app.projectPage.toast).toBeVisible()
    await expect(app.projectPage.toast).toContainText('Конфигурация создана')
});

  test.afterEach(async ({ app }) => {
    //TODO: Заменить на API
    await app.projectSettingPage.header.clickProjectButton()
    await app.projectPage.clickArchiveButton()
    await app.archiveProjectModal.clickYesToArchiveButton()
    await app.projectPage.header.clickArchiveButtton()
    await app.archivePage.clickDeleteButton()
    await app.deleteProjectModal.clickDeleteButton()
    await app.archivePage.header.clickProjectSettingButton()
    await app.projectSettingPage.deleteConfiguretion()
    await app.deleteConfigurationtModal.clickDeleteButton()
  });
});

test.describe('Удаление конфигурации', () => {
  test.beforeEach(async ({ app, usingRandomProject, usingNewConfiguration }) => {
    await app.cookieManager.setCookies();
    await app.loginPage.openLoginTestIt();
    await app.loginPage.authorizationTestUser();
    await app.spacePage.clickMySpace();
    await app.trialPeriodModal.clickOkButton();
    await app.projectPage.clickCreateProjectButton();
    await app.newProjectModal.createNewRandomProject(usingRandomProject);
    await app.projectPage.visibleProjectTitle()
    await app.projectPage.goingToCreateConfiguration()
    await app.newConfigurationsModal.createNewConfiguration(usingNewConfiguration({title: "test1",description: "test", keyParams: "test1", valueParams: "test2"}))
    //TODO: Подумать как можно убрать доп ожидание
    await app.page.waitForTimeout(1000)
    await app.projectPage.waitToDisappearToast()
  });

  test('Успешное удаление ранее созданной конфигурации', async ({ app }) => {
    await app.projectPage.header.clickProjectSettingButton()
    await app.projectSettingPage.deleteConfiguretion()
    await app.deleteConfigurationtModal.clickDeleteButton()
    await expect(app.projectPage.toast).toBeVisible()
    await expect(app.projectPage.toast).toContainText('Параметр был успешно удален')
  });

  test.afterEach(async ({ app }) => {
    //TODO: Заменить на API
    await app.projectSettingPage.header.clickProjectButton()
    await app.projectPage.clickArchiveButton()
    await app.archiveProjectModal.clickYesToArchiveButton()
    await app.projectPage.header.clickArchiveButtton()
    await app.archivePage.clickDeleteButton()
    await app.deleteProjectModal.clickDeleteButton()
  });
});