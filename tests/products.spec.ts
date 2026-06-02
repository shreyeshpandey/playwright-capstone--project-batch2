import {test, expect} from '@playwright/test';
import { ProductPage } from '../pages/ProductsPage';
import { LoginPage } from '../pages/LoginPage';

test.describe('Postive Login Flow', () => {

    let productPage : ProductPage;
    let loginPage : LoginPage;

    test.beforeEach( async ({page}) => {
        productPage = new ProductPage(page);
        loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();
        await loginPage.login('sagesyntaxacademy','BuildingExcellence@111');
    });

    test('User should be able to navigate to Products page', async({page}) =>{
        await productPage.navigateToProductsPage();
    });


});