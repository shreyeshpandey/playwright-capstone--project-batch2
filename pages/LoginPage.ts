import { Page, Locator } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    private readonly usernameField: Locator;
    private readonly passwordField: Locator;
    private readonly TnC_Checkbox: Locator;
    private readonly signInBtn: Locator;
    public readonly logoutBtn: Locator;
    public readonly loginSuccessMsg : Locator;

    constructor(page: Page){
        this.page = page;
        this.usernameField = page.getByLabel('Username');
        this.passwordField = page.getByLabel('Password');
        this.TnC_Checkbox = page.getByRole('checkbox', {name: 'terms'});
        this.signInBtn = page.getByRole('button', {name: 'Sign In'});
        this.logoutBtn = page.getByRole('button', {name: 'Logout'});
        this.loginSuccessMsg = page.getByText('Login Successful');
    }

    async gotoLoginPage (){
        await this.page.goto('');
    }

    async login(username:string, password: string){
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.TnC_Checkbox.check();
        await this.signInBtn.click();
    }




}