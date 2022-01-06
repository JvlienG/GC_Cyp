Feature: Translate Feature
    Verify if user is able to translate his sentences in to the site

    Scenario Outline: Translation into English
        Given I open the Deepl page
        When I put input to french and output to english
        And I write "<sentence>" in the translation input
        Then The translation output should equal "<translation>"

        Examples:
            | sentence        | translation  |
            | Salut           | Hello        |

    Scenario: Deletion of the text
        Given I open the Deepl page
        When I put input to french and output to english
        And I write "Hello World" in the translation input
        And I click on the delete button
        Then The translation output should equal ""