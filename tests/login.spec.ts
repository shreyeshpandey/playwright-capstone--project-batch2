import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Postive Login Flow', () => {

    let loginPage : LoginPage;

    test.beforeEach( async ({page}) => {
        loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();
        await loginPage.login('sagesyntaxacademy','BuildingExcellence@111');
        await loginPage.logoutBtn.waitFor();
    });

    test('User is able to login successfully', async({page}) =>{
        expect(loginPage.logoutBtn).toBeVisible();
        expect(page).toHaveURL(/home/);
    });

    test('Verify that user is able to view Login Successfull message', async({page}) =>{
        expect(loginPage.loginSuccessMsg).toBeVisible();
    })


});