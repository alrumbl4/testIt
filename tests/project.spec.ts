import { test, expect } from '../src/fixtures/app.fixtures.js';

test.describe('Создание проекта', () => {
  test.beforeEach(async ({ app }) => {
    await app.cookieManager.setCookies();
    await app.loginPage.openLoginTestIt();
    await app.loginPage.authorizationTestUser();
    await app.spacePage.clickMySpace();
    await app.trialPeriodModal.clickOkButton();
  });

  test('Успешное создание нового проекта', async ({ app, usingRandomProject }) => {
    await app.projectPage.clickCreateProjectButton();
    await app.newProjectModal.createNewRandomProject(usingRandomProject);
    
    await expect(app.projectPage.projectTitle).toBeVisible();
    await expect(app.projectPage.projectTitle).toHaveText(usingRandomProject.titleProject);
  });

  test.afterEach(async ({ app }) => {
    //TODO: Заменить на API
    await app.projectPage.header.clickProjectButton()
    await app.projectPage.clickArchiveButton()
    await app.archiveProjectModal.clickYesToArchiveButton()
    await app.projectPage.header.clickArchiveButtton()
    await app.archivePage.clickDeleteButton()
    await app.deleteProjectModal.clickDeleteButton()
  });
});

test.describe('Архивация проекта', () => {
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

  test('Успешное архивирование ранее созданного проекта', async ({ app }) => {
    await app.projectPage.header.clickProjectButton()
    await app.projectPage.clickArchiveButton()
    await app.archiveProjectModal.clickYesToArchiveButton()
    await expect(app.projectPage.noProjectsBlock).toBeVisible()
    await expect(app.projectPage.toast).toBeVisible()
    await expect(app.projectPage.toast).toHaveText('Проект был перемещен в архив.')
  });

  test.afterEach(async ({ app }) => {
    //TODO: Заменить на API
    //TODO: Подумать как можно убрать доп ожидание
    await app.page.waitForTimeout(1000)
    await app.projectPage.waitToDisappearToast()
    await app.projectPage.header.clickArchiveButtton()
    await app.archivePage.clickDeleteButton()
    await app.deleteProjectModal.clickDeleteButton()
  });
});


test.describe('Восстановление заархивированного проекта', () => {
  test.beforeEach(async ({ app, usingRandomProject }) => {
    await app.cookieManager.setCookies();
    await app.loginPage.openLoginTestIt();
    await app.loginPage.authorizationTestUser();
    await app.spacePage.clickMySpace();
    await app.trialPeriodModal.clickOkButton();
    await app.projectPage.clickCreateProjectButton();
    await app.newProjectModal.createNewRandomProject(usingRandomProject);
    await app.projectPage.visibleProjectTitle()
    await app.projectPage.header.clickProjectButton()
    await app.projectPage.clickArchiveButton()
    await app.archiveProjectModal.clickYesToArchiveButton()
    //TODO: Подумать как можно убрать доп ожидание
    await app.page.waitForTimeout(1000)
    await app.projectPage.waitToDisappearToast()
  });

  test('Успешное восстановление ранее заархивированного проекта', async ({ app }) => {
    await app.projectPage.header.clickArchiveButtton()
    await app.archivePage.clickRestoreButton()
    await app.restoreProjectModal.clickRestoreButton()
    await expect(app.archivePage.toast).toBeVisible()
    await expect(app.archivePage.toast).toContainText('Проект восстанавливается...')
    await expect(app.archivePage.projectTitle).not.toBeVisible()
  });

  test.afterEach(async ({ app }) => {
    //TODO: Заменить на API
    //TODO: Подумать как можно убрать доп ожидание
    await app.page.waitForTimeout(5000)
    await app.archivePage.header.clickProjectButton()
    await app.projectPage.clickArchiveButton()
    await app.archiveProjectModal.clickYesToArchiveButton()
    await app.projectPage.waitToDisappearToast()
    await app.projectPage.header.clickArchiveButtton()
    await app.archivePage.clickDeleteButton()
    await app.deleteProjectModal.clickDeleteButton()
  });
});

test.describe('Удаление заархивированного проекта', () => {
  test.beforeEach(async ({ app, usingRandomProject }) => {
    await app.cookieManager.setCookies();
    await app.loginPage.openLoginTestIt();
    await app.loginPage.authorizationTestUser();
    await app.spacePage.clickMySpace();
    await app.trialPeriodModal.clickOkButton();
    await app.projectPage.clickCreateProjectButton();
    await app.newProjectModal.createNewRandomProject(usingRandomProject);
    await app.projectPage.visibleProjectTitle()
    await app.projectPage.header.clickProjectButton()
    await app.projectPage.clickArchiveButton()
    await app.archiveProjectModal.clickYesToArchiveButton()
    //TODO: Подумать как можно убрать доп ожидание
    await app.page.waitForTimeout(1000)
    await app.projectPage.waitToDisappearToast()
    await app.projectPage.header.clickArchiveButtton()
  });

  test('Успешное удаление ранее заархивированного проекта', async ({ app }) => {
    await app.projectPage.header.clickArchiveButtton()
    await app.archivePage.clickDeleteButton()
    await app.deleteProjectModal.clickDeleteButton()
    await expect(app.archivePage.toast).toBeVisible()
    await expect(app.archivePage.toast).toContainText('Проект удаляется...')
    await expect(app.archivePage.projectTitle).not.toBeVisible()
  });
});
