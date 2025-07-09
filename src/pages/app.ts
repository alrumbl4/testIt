import { LoginPage, SpacePage, ExitConfirmationePage, ProjectPage, ArchivePage, ProjectSettingPage } from './indexPages'
import { NewProjectModal, TrialPeriodModal, ArchiveProjectModal, RestoreProjectModal, DeleteProjectModal, NewConfigurationsModal, DeleteConfigurationtModal } from '../modal/indexModal'
import { Page } from '@playwright/test';
import { CookieManager } from '../utils/cookieManager';

export class App {
  constructor(
    public readonly page: Page,
    public cookieManager: CookieManager | null = null,
    public readonly loginPage: LoginPage = new LoginPage(page),
    public readonly spacePage: SpacePage = new SpacePage(page),
    public readonly exitConfirmationPage: ExitConfirmationePage = new ExitConfirmationePage(page),
    public readonly projectPage: ProjectPage = new ProjectPage(page),
    public readonly newProjectModal: NewProjectModal = new NewProjectModal(page),
    public readonly trialPeriodModal: TrialPeriodModal = new TrialPeriodModal(page),
    public readonly archiveProjectModal: ArchiveProjectModal = new ArchiveProjectModal(page),
    public readonly archivePage: ArchivePage = new ArchivePage(page),
    public readonly restoreProjectModal: RestoreProjectModal = new RestoreProjectModal(page),
    public readonly deleteProjectModal: DeleteProjectModal = new DeleteProjectModal(page),
    public readonly newConfigurationsModal: NewConfigurationsModal = new NewConfigurationsModal(page),
    public readonly projectSettingPage: ProjectSettingPage = new ProjectSettingPage(page),
    public readonly deleteConfigurationtModal: DeleteConfigurationtModal = new DeleteConfigurationtModal(page),
  ) {}
}