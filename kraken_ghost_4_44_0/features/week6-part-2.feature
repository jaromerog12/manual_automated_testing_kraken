Feature: week6-part-2
  @user6 @web
  Scenario: Show only posts by status and author
    Given I navigate to page "<SIGN_IN_PAGE>"
    When I enter email "<USERNAME>"
    And I wait for 3 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click signIn
    And I wait for 2 seconds
    When I select page option in sidebar posts
    And I wait for 2 seconds
    And I open status filter
    And I wait for 2 seconds
    And I select filter published option
    And I wait for 2 seconds
    And I want filter by PUBLISHED items
    And I wait for 2 seconds
    And I open author filter
    And I wait for 2 seconds
    And I want choose filter by random author
    And I wait for 2 seconds
    Then I want validate that filter only contain PUBLISHED status
    And I wait for 2 seconds
    And I want validate posts lists only contain author selected in author filter
    And I wait for 2 seconds

  @user7 @web
  Scenario: Create new tag
    Given I navigate to page "<SIGN_IN_PAGE>"
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click signIn
    And I wait for 2 seconds
    When I select page option in sidebar tags
    And I wait for 2 seconds
    And I want press new item button
    And I wait for 2 seconds
    And I want fill fields
    And I wait for 2 seconds
    And I want to press save button
    And I wait for 2 seconds
    And I navigate to page "<url_tags>"
    And I wait for 2 seconds
    Then I want validate tags in list
    And I wait for 2 seconds

  @user8 @web
  Scenario: Delete posts
    Given I navigate to page "<SIGN_IN_PAGE>"
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click signIn
    And I wait for 2 seconds
    When I select page option in sidebar posts
    And I wait for 2 seconds
    And I want choose random item
    And I wait for 2 seconds
    And I want open item settings
    And I wait for 2 seconds
    And I want press delete item button
    And I wait for 2 seconds
    And I want press confirm delete item button
    And I wait for 2 seconds
    Then I want validate lists items, after delete
    And I wait for 2 seconds

  @user5 @web
  Scenario: Show only page by status
    Given I navigate to page "<SIGN_IN_PAGE>"
    When I enter email "<USERNAME>"
    And I wait for 3 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click signIn
    And I wait for 2 seconds
    When I select page option in sidebar pages
    And I wait for 2 seconds
    And I open status filter
    And I wait for 2 seconds
    And I select filter published option
    And I wait for 2 seconds
    And I want filter by PUBLISHED items
    And I wait for 2 seconds
    Then I want validate that filter only contain PUBLISHED status
    And I wait for 2 seconds

  @user10 @web
  Scenario: Delete page
    Given I navigate to page "<SIGN_IN_PAGE>"
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click signIn
    And I wait for 2 seconds
    And I select page option in sidebar pages
    And I wait for 2 seconds
    And I want choose random item
    And I wait for 2 seconds
    And I want open item settings
    And I wait for 2 seconds
    And I want press delete item button
    And I wait for 2 seconds
    And I want press confirm delete item button
    And I wait for 2 seconds
    Then I want validate lists items, after delete
    And I wait for 2 seconds