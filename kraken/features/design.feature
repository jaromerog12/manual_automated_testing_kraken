Feature: Pages

  @user1 @web
  Scenario: Create new item in navbar
    Given I navigate to page "http://localhost:2368/ghost//signin"
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click signIn
    And I wait for 2 seconds
    When I navigate to page "http://localhost:2368/ghost//settings/design"
    And I wait for 2 seconds
    And I want add new item to navbar
    And I wait for 2 seconds
    And I press save button
    And I navigate to page "http://localhost:2368"
    And I wait for 2 seconds
    Then Validate new item in navbar
    And I wait for 2 seconds

  @user2 @web
  Scenario: Create new item in second navbar
    Given I navigate to page "http://localhost:2368/ghost//signin"
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click signIn
    And I wait for 2 seconds
    When I navigate to page "http://localhost:2368/ghost//settings/design"
    And I wait for 2 seconds
    And I want add new item to second navbar
    And I wait for 2 seconds
    And I press save button
    And I navigate to page "http://localhost:2368"
    And I wait for 2 seconds
    Then Validate new item in second navbar
    And I wait for 2 seconds
#
  @user3 @web
  Scenario: Delete item navbar
    Given I navigate to page "http://localhost:2368/ghost//signin"
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click signIn
    And I wait for 2 seconds
    And I navigate to page "http://localhost:2368/ghost//settings/design"
    And I wait for 2 seconds
    And I want add new item to navbar
    And I wait for 2 seconds
    And I press save button
    And I navigate to page "http://localhost:2368"
    And I wait for 2 seconds
    And I navigate to page "http://localhost:2368/ghost//settings/design"
    And I wait for 2 seconds
    And I want press delete item navbar button
    And I wait for 2 seconds
    And I press save button
    And I wait for 2 seconds
    And I navigate to page "http://localhost:2368"
    And I wait for 2 seconds
    Then I want validate item not exist in navbar
    And I wait for 2 seconds
#
  #@user4 @web
  #Scenario: Delete item second navbar
  #  Given I navigate to page "http://localhost:2368/ghost//signin"
  #  When I enter email "<USERNAME>"
  #  And I wait for 2 seconds
  #  And I enter password "<PASSWORD>"
  #  And I wait for 2 seconds
  #  And I click signIn
  #  And I wait for 2 seconds
  #  And I navigate to page "http://localhost:2368/ghost//settings/design"
  #  And I wait for 2 seconds
  #  And I want add new item to second navbar
  #  And I wait for 2 seconds
  #  And I press save button
  #  And I navigate to page "http://localhost:2368"
  #  And I wait for 2 seconds
  #  And I navigate to page "http://localhost:2368/ghost//settings/design"
  #  And I wait for 2 seconds
  #  And I want press delete item second navbar button
  #  And I wait for 2 seconds
  #  And I press save button
  #  And I wait for 2 seconds
  #  And I navigate to page "http://localhost:2368"
  #  And I wait for 2 seconds
  #  Then I want validate item not exist in second navbar
  #  And I wait for 2 seconds