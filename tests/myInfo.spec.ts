import { LoginData} from '../test-data/LoginData';
// import { test, expect } from '@playwright/test'
import { test, expect } from '../fixtures/base-fixtures';
import { MyInfo } from '../pages/myinfo';
//  import * as allure from 'allure-js-commons'
 
test.describe("Orange HRM demo automation testing", () => {
    test.beforeEach(async ({ loginPage, page }) => {
        // Custom fixter
        const username =LoginData.username;
        const password = LoginData.password;
        // Open OrangeHRM login page
        await loginPage.open();
        // Login to OrangeHRM
        await loginPage.login(username, password);
        await expect(page).toHaveURL(/\/dashboard\/index/);
        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    // await allure.label('module', 'authentication');
    // await allure.label('testType', 'smoke');
    // await allure.parameter('environment', 'demo');
    })
   test('my info open', async ({ page }) => {
     //opening myInfo
       const infop = new MyInfo(page);
       //selectig menu
        await infop.InfoMenu();
        //emplyee name input
        await infop.getempname();
        // employee details
        await infop.getempDetails();
        //nationality 
        await infop.getnationality();
        //matrimony
        await infop.getmatrital_status();
        //personal details
        await infop.get_personald();
        //custom fields
        //await infop.get_customfield()
        //add extra details for attachind a file
        // await infop.add_button();
        
    });
});
 