Feature: CreateAccount Feature
    As frequent user I want to create an account

    Scenario: create new account with valid credits
        Given user is on the login page
        When user fill fields
        Then user should be on page for account activation