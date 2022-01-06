import {Given, And, When, Then, After, Before} from "cypress-cucumber-preprocessor/steps";
import HomePage from "../pagesObject/HomePage";
import LoginPage from '../pagesObject/LoginPage';
import LogoutPage from'../pagesObject/LogoutPage';
import AccountPage from '../pagesObject/AccountPage';

Before(() => {
    
})

After(() => {

})

Given(/user is logged on his account with "([^"]*)" and "([^"]*)"/,(username, password) => {
    const loginPage = new LoginPage()
    loginPage.goTo()
    loginPage.login(username, password)
})

When(/user go on his account page/, () => {
    const accountPage = new AccountPage()
    accountPage.goTo()
    accountPage.isAccountPage()
})

And(/user logout/, () => {
    const logoutPage = new LogoutPage()
    logoutPage.logout()
})

Then(/user should be disconnect/, () => {
    const loginPage = new LoginPage()
    loginPage.goTo()
    loginPage.isLoginPage()
})