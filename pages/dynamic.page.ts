import { Page, Locator } from '@playwright/test';

export class DynamicPage {
    readonly page: Page;


    constructor(page: Page) {
        this.page = page;

    }

}