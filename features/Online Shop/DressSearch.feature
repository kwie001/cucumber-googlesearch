Feature: Dress Search

    As a user, I want to be able to search for dresses by type so I can purchase one

    Background:
        Given The browser is at the "Home" page

    Scenario: Search for a type that does not exist
        When The user searches for "floral"
        Then A no results error message is shown
        And No products are listed

    Scenario: Search for a type that exists
        When The user searches for "printed"
        Then Products are listed
        And Search results show products related to "printed"