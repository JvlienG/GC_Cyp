import {Given, And, When, Then, After, Before} from "cypress-cucumber-preprocessor/steps";

Before(() => {

})

After(() => {

})

Given (/I open the Deepl page/, function (){
    cy.visit('https://www.deepl.com/')
    cy.url().should('contains', "deepl.com")
    cy.get('.dl_cookieBanner--buttonAll').click()
    cy.get('#dl_translator').should('be.visible')
    cy.get('.lmt__source_textarea').should('be.visible')
})

When (/I put input to french and output to english/, function (){
    cy.get('.lmt__language_container > .lmt__language_select > .lmt__language_select__active').click()
    cy.get('[dl-test="translator-lang-option-fr"]').click()

    cy.get('.lmt__language_container_prim > .lmt__language_select > .lmt__language_select__active > .lmt__language_select__active__title > strong').click()
    cy.get('[dl-test="translator-lang-option-en-GB"]').click()
}) 

And (/I write "([^"]*)" in the translation input/, function (text){
    cy.get('.lmt__source_textarea').type(text, {delay: 25})
})

And (/I click on the delete button/, function (text){
    cy.get('.lmt__clear_text_button').click()
})

Then (/The translation output should equal "([^"]*)"/, function(translation) {
    //cy.get('.lmt__target_textarea').should('contains.text',translation)
    cy.get('.lmt__side_container--target > .lmt__textarea_container').should('contains.text', translation)
})