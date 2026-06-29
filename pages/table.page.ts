import { Page, Locator } from '@playwright/test';

export class TablePage {
    readonly page: Page;


    constructor(page: Page) {
        this.page = page;

    }

}