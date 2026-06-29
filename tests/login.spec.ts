import { expect, _electron } from '@playwright/test'; // Import the expect function from Playwright for assertions
import { test } from '../fixtures/baseTest'; // Import the custom test object from baseTest.ts
import users from '../.auth/test-credentials.json'; // Import the users object from the JSON file

test.describe('Login as Invalid User', () => {
    test('Invalid Credentials', async ({ loginPage }) => {
        await loginPage.inputusername('wrong_user');
        await loginPage.inputpassword('wrong_password');
        await loginPage.clickLogin();

        //Expectation for Invalid User Login
        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toHaveText('Invalid username or password.');
    });
});
test.describe('Login as Locked User', () => {
    test('Locked Account', async ({ loginPage }) => {
        await loginPage.inputusername('locked_user');
        await loginPage .inputpassword(users['locked_user']?.password);
        await loginPage.clickLogin();

        //Expectation for Locked User Login
        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toHaveText('Error: This account has been locked.');
    });
});
test.describe('Login as Standard User', () => {
    test('Standard Account', async ({ loginPage }) => {
        await loginPage.inputusername('standard_user');
        await loginPage.inputpassword(users['standard_user']?.password);
        await loginPage.clickLogin();

        //Expectation for Standard User Login
        await expect(loginPage.accountTitle).toBeVisible();
        await expect(loginPage.logoutButton).toBeVisible();
        await expect(loginPage.accountTitle).toHaveText('standard_user (Standard)');
    });
});
test.describe('Login as admin User', () => {
    test('Admin Account', async ({ loginPage }) => {
        await loginPage.inputusername('admin_user');
        await loginPage.inputpassword(users['admin_user']?.password);
        await loginPage.clickLogin();

        //Expectation for Admin User Login
        await expect(loginPage.accountTitle).toBeVisible();
        await expect(loginPage.logoutButton).toBeVisible();
        await expect(loginPage.accountTitle).toHaveText('admin_user (Admin)');
    });

})
