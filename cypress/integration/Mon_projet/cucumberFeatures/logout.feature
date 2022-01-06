Feature: LogoutFeature
    As user logged I want to logout

    Scenario: user logout
        Given user is logged on his account with "test8@yopmail.com" and "Cacahuette9102"
        When user go on his account page
        And user logout
        Then user should be disconnect