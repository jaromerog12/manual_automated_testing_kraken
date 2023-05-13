Feature: design-create
  @user1 @web
  Scenario: Create new item in navbar
    Given I navigate to page "<SIGN_IN_PAGE>"
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click signIn
    And I wait for 2 seconds
    When I navigate to page "<url_settings_navigation>"
    And I wait for 2 seconds
    And I want add new item to navbar
    And I wait for 2 seconds
    And I press save button
    And I navigate to page "<url_home_page>"
    And I wait for 2 seconds
    Then Validate new item in navbar
    And I wait for 2 seconds

  @user2 @web
  Scenario: Create new item in second navbar
    Given I navigate to page "<SIGN_IN_PAGE>"
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click signIn
    And I wait for 2 seconds
    When I navigate to page "<url_settings_navigation>"
    And I wait for 2 seconds
    And I want add new item to second navbar
    And I wait for 2 seconds
    And I press save button
    And I navigate to page "<url_home_page>"
    And I wait for 2 seconds
    Then Validate new item in second navbar
    And I wait for 2 seconds