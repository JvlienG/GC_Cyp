import {Given, And, When, Then, After, Before} from "cypress-cucumber-preprocessor/steps";
import HomePage from "../pagesObject/HomePage";
import LoginPage from '../pagesObject/LoginPage';

Before(() => {
    
})

After(() => {

})

Given(/user go on the login page/, () => {
    const loginPage = new LoginPage()
    loginPage.goTo()
})

When (/user fill the fields with "([^"]*)" and "([^"]*)"/, (usr, pwd) => {
    const loginPage = new LoginPage()
    loginPage.login(usr, pwd)
})

Then (/user should see welcome message/, () => {
    const homePage = new HomePage()
    /*if(*/homePage.isWelcomeDisplayed()/*){
        cy.log("Element is visible")
    }else{
        cy.log("Element is not visible")
    }*/
})