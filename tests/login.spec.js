import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login'

test('test', async ({ page }) => {


    const Login = new LoginPage(page)

    await Login.gotoLoginPage()
    await Login.login('Thomas', 'Tazneen123')


    // await page.goto('https://the-internet.herokuapp.com/login');
    // await page.getByLabel('Username').click();
    // await page.getByLabel('Username').fill('Thomas');
    // await page.getByLabel('Password').click();
    // await page.getByLabel('Password').fill('Tazneen123');
    // await page.getByRole('button', { name: ' Login' }).click();
});