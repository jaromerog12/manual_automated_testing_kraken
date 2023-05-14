Feature: General

  @user1 @web
  Scenario: update title
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click signIn
    And I wait for 2 seconds
    When I navigate to page "http://localhost:2368/ghost/#/settings/general"
    And I wait for 2 seconds
    And I want expand setting-first menu
    And I wait for 2 seconds
    And I fill field title
    And I wait for 2 seconds
    And I want press save button general option
    And I wait for 2 seconds
    And I navigate to page "http://localhost:2368"
    And I wait for 2 seconds
    Then Validate title in home page
    And I wait for 2 seconds

  @user2 @web
  Scenario: update metadata
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click signIn
    And I wait for 2 seconds
    When I navigate to page "http://localhost:2368/ghost/#/settings/general"
    And I wait for 2 seconds
    And I want expand setting-first menu site meta
    And I wait for 2 seconds
    And I fill fields metadata
    And I wait for 2 seconds
    And I want press save button general option
    And I wait for 2 seconds
    Then Validate metadata
    And I wait for 2 seconds

  @user3 @web
  Scenario: update facebook
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click signIn
    And I wait for 2 seconds
    When I navigate to page "http://localhost:2368/ghost/#/settings/general"
    And I wait for 2 seconds
    And I want expand setting menu site meta
    And I wait for 2 seconds
    And I fill fields twitter
    And I wait for 2 seconds
    And I want press save button general option
    And I wait for 2 seconds
    Then Validate twitter
    And I wait for 2 seconds

  @user4 @web
  Scenario: update Twitter
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click signIn
    And I wait for 2 seconds
    When I navigate to page "http://localhost:2368/ghost/#/settings/general"
    And I wait for 2 seconds
    And I want expand setting-last menu site meta
    And I wait for 2 seconds
    And I fill fields facebook
    And I wait for 2 seconds
    And I want press save button general option
    And I wait for 2 seconds
    Then Validate facebook
    And I wait for 2 seconds