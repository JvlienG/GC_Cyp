/// <reference types="cypress"/>

before(() => {
    cy.log('I run once before all tests')
    cy.visit('/translator')
})

beforeEach(() => {
    cy.log('I run before every test')
})

afterEach(() => {
    cy.log('I run after every test')
})

after(() => {
    cy.log('I run once after all tests')
})


describe('Front end testing', () => {
    it('Access the home page', () => {
        cy.log('This is within my created test')
        cy.url().then(url => {
            const getUrl = url
            cy.log(getUrl)
        })
        cy.url().should('contains', "deepl.com")
        cy.get('.dl_cookieBanner--buttonAll').click()
        cy.get('#dl_translator').should('be.visible')
        cy.get('.lmt__source_textarea').should('be.visible')
    })
})