import { Page, Locator } from '@playwright/test';

export class ValidationPage {
    readonly page: Page;


    constructor(page: Page) {
        this.page = page;

    }

}