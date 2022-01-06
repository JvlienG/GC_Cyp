Feature: Login feature
    As user I want to login to my account

    Scenario Outline: user logged with valid input
        Given user go on the login page
        When user fill the fields with "<username>" and "<password>"
        Then user should see welcome message

        Examples:
        | username          | password          |
        | test8@yopmail.com | Cacahuette9102    |

        