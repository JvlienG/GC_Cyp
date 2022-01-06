import {Given, And, When, Then, After, Before} from "cypress-cucumber-preprocessor/steps";
import HomePage from "../pagesObject/HomePage";
import LoginPage from '../pagesObject/LoginPage';
import ArticlePage from '../pagesObject/ArticlePage';

Before(() => {
    
})

After(() => {

})

Given(/user is on the home page/, () => {
    const homePage = new HomePage()
    homePage.goTo()
})

When(/user do research for "([^"]*)"/, (search) => {
    const articlePage = new ArticlePage()
    articlePage.searchArticle(search)
})

Then(/user should be on the page matching with "([^"]*)"/, () => {

})