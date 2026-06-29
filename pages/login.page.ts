import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;

    //  Login Input Locators
    readonly username: Locator;
    readonly password: Locator;
    //  Login button Locators
    readonly loginbutton: Locator;
    //  Side Menu button Locators
    readonly validationButton: Locator;
    readonly dynamicButton: Locator;
    readonly tableButton: Locator;
    readonly PopupsNFramesButton: Locator;
    readonly DragDropUploadLabButton: Locator;
    //  Account Title
    readonly accountTitle: Locator;
    //  Logout button
    readonly logoutButton: Locator;
    //  Error  message
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;

        // Header Init
        this.username = page.getByTestId('username-input');
        this.password = page.getByTestId('password-input');

        // Login button Init
        this.loginbutton = page.getByTestId('login-button');

        // Side Menu button Init
        this.validationButton = page.getByTestId('validation');
        this.dynamicButton = page.getByTestId('nav-dynamic');
        this.tableButton = page.getByTestId('nav-table');
        this.PopupsNFramesButton = page.getByTestId('nav-PopupsNFramesButton');
        this.DragDropUploadLabButton = page.getByTestId('nav-DragDropUploadLabButton');

        // Account Title
        this.accountTitle = page.getByTestId('username-display');
        //Logout button
        this.logoutButton = page.getByTestId('logout-button');
        //Error message
        this.errorMessage = page.getByTestId('error-message');
    }

    async inputusername(username: string) {
        await this.username.fill(username);
    }

    async inputpassword(password: string) {
        await this.password.fill(password);
    }

    async clickLogin() {
        await this.loginbutton.click();
    }

}