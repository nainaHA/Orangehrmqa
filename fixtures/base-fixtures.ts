import { test as base, expect } from '@playwright/test';
import { loginPage } from '../pages/LoginPage';
type Fixtures = {
  loginPage: loginPage;
};
 
// Add one useful object to Playwright's normal test fixtures.
export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    const LoginPage = new loginPage(page);
    await use(LoginPage);
  },

});
 
export { expect };