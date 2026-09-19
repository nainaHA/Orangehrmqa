import { Page, Locator } from '@playwright/test';
 
export class loginPage {
    
  private readonly usernameInput: Locator; //class properties
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
 
  constructor(private readonly page: Page) {
 
    this.usernameInput = page.getByPlaceholder('Username');
 
    this.passwordInput = page.getByPlaceholder('Password');
 
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }
 async open() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }
 
  async login(username: string, password: string) {
 
    await this.usernameInput.fill(username);
 
    await this.passwordInput.fill(password);
 
    await this.loginButton.click();
  }};
 