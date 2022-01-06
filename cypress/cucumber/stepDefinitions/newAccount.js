import {Given, And, When, Then, After, Before} from "cypress-cucumber-preprocessor/steps";
import HomePage from "../pagesObject/HomePage";
import LoginPage from '../pagesObject/LoginPage';
import AccountPage from '../pagesObject/AccountPage';

Before(() => {
    
})

After(() => {

})

Given(/user is on the login page/, () => {
    const loginPage = new LoginPage()
    loginPage.goTo()
})

When(/user fill fields/, () => {
    const accountPage = new AccountPage()
    accountPage.createAccount()
})

Then(/user should be on page for account activation/, () => {
    
})

