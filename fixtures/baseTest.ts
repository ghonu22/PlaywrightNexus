import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { DragndropnframsPage } from '../pages/dragndropnframs.page';
import { DynamicPage } from '../pages/dynamic.page';
import { TablePage } from '../pages/table.page';
import { ValidationPage } from '../pages/validation.page';


type MyFixtures = {
    loginPage: LoginPage;
    dragndropnframs: DragndropnframsPage;
    dynamic: DynamicPage;
    table: TablePage;
    validation: ValidationPage;
};

export const test = baseTest.extend<MyFixtures>({

    loginPage: async ({ page }, use) => {
        await page.goto('main.html');
        await use(new LoginPage(page));
    },


    dragndropnframs: async ({ page }, use) => {
        await use(new DragndropnframsPage(page));
    },

    dynamic: async ({ page }, use) => {
        await use(new DynamicPage(page));
    },

    table: async ({ page }, use) => {
        await use(new TablePage(page));
    },

    validation: async ({ page }, use) => {
        await use(new ValidationPage(page));
    },
});

export { expect } from '@playwright/test';