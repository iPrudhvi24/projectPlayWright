Feature: I want to login into the site with valid credentials

  Background:
    Given I navigate to the Website login screen

  Scenario: Login to the application with valid credentials
    When I entered valid credential
    And click on login button
    Then User should be logged into the application successfully
