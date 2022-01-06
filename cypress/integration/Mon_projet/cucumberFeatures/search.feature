Feature: SearchArticle
    As user I want to search an article on the site

    Scenario Outline: user search an article
        Given user is on the home page
        When user do research for "<article>"
        Then user should be on the page matching with "<article>"

        Examples:
        | article       |
        | Call of Duty  |
