import { Page, Locator } from "@playwright/test";

export class ProductPage {
    readonly page: Page;
    private readonly ProductPageNav: Locator;

    constructor(page: Page){
        this.page = page;
        this.ProductPageNav = page.getByRole('link', {name: 'Products'});
        
    }

    async navigateToProductsPage(){
        await this.ProductPageNav.click();
    }



}