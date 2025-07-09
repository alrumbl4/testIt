import { test as base, Page, BrowserContext, expect } from '@playwright/test';
import { App } from '../pages/app';
import { CookieManager } from '../utils/cookieManager';
import { UserBuilder, ProjectBuilder, ConfigurationBuilder } from '../builder/indexBuilder';

interface AppWithCookies extends App {
  cookieManager: CookieManager;
}

interface CustomFixtures {
  app: AppWithCookies;
  usingRandomUser: ReturnType<UserBuilder['build']>;
  usingRandomProject: ReturnType<ProjectBuilder['build']>;
  usingNewConfiguration: (params: {
    title: string;
    description?: string;
    keyParams?: string;
    valueParams?: string;
  }) => ReturnType<ConfigurationBuilder['build']>;
}

export const test = base.extend<CustomFixtures>({
  app: async ({ page, context }: { page: Page; context: BrowserContext }, use: (app: AppWithCookies) => Promise<void>) => {
    const app = new App(page) as AppWithCookies;
    app.cookieManager = new CookieManager(context);
    await use(app);
  },

  usingRandomUser: async ({}, use) => {
    const randomUser = new UserBuilder()
      .withRandomEmail()
      .withRandomPassword()
      .build(); 
    
    await use(randomUser);
  },

  usingRandomProject: async ({}, use) => {
    const randomProject = new ProjectBuilder()
      .withRandomTitleProject()
      .withRandomDescriptionProject()
      .build(); 
    
    await use(randomProject);
  },

  usingNewConfiguration: async ({}, use) => {
    await use((params) => {
      return new ConfigurationBuilder()
        .withTitleProject(params.title)
        .withDescriptionProject(params.description || 'Default description')
        .withKeyParametrsProject(params.keyParams || 'default_key')
        .withValueParametrsProject(params.valueParams || 'default_value')
        .build();
    });
  }
});

export { expect };