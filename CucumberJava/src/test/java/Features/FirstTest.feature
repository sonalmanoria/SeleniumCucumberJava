Feature: Login Feature
  Verify if user is able to Login in to the site

  Scenario: Login as a authenticated user
    Given user is on homepage
    When user navigates to Login Page
    And user enters incorrect username and incorrect Password
    And user select the sign in button
    Then error message is displayed
    