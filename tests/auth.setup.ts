import { Page, expect, test as setup } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

import users from '../.auth/test-credentials.json';

const adminUser = '.auth/admin.json';
const standardUser = '.auth/standard.json';
const lockedUser = '.auth/locked.json';

const authenticate = async (page: Page, username: string) => {
    const login = new LoginPage(page);
    //Login
    await  login.inputusername(username);
    await  login.inputpassword(users[username]?.password);
    await  login.clickLogin();
    // expect page to be rendered
};

setup.beforeEach(async ({ page }) => {
    await page.goto('htmlWebsite/main.html');
});

setup('Authenticate as Admin', async ({ page }) => {
    await authenticate(page, 'admin_user');
    await page.context().storageState({ path: adminUser });
});

setup('Authenticate as Standard User', async ({ page }) => {
    await authenticate(page, 'standard_user');
    await page.context().storageState({ path: standardUser });
});
setup('Authenticate as Locked User', async ({ page }) => {
    await authenticate(page, 'locked_user');
    await page.context().storageState({ path: lockedUser });
});

