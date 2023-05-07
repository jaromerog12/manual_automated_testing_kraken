Feature: Pages

  @user1 @web
  Scenario: Create new page
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    When I enter email "<USERNAME>"
    And I wait for 3 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click signIn
    And I wait for 2 seconds
    When I select page option in sidebar pages
    And I wait for 2 seconds
    And I want press new page button
    And I wait for 2 seconds
    And I write title
    And I wait for 2 seconds
    And I write body
    And I wait for 2 seconds
    And I click display publish menu
    And I wait for 2 seconds
    And I select set it live now
    And I wait for 2 seconds
    And I click publish item
    And I wait for 3 seconds
    And click back list items
    And I wait for 2 seconds
    Then I want validate "<url_page>" url
    And I wait for 2 seconds
    And I should show item in list
    And I wait for 2 seconds
    And I want validate new item with published status
    And I wait for 2 seconds

  @user2 @web
  Scenario: Update page
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    When I enter email "<USERNAME>"
    And I wait for 3 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click signIn
    And I wait for 2 seconds
    When I select page option in sidebar pages
    And I wait for 2 seconds
    And I want choose random item
    And I wait for 2 seconds
    And I want open item settings
    And I wait for 2 seconds
    And I want to write in excerpt input
    And I wait for 2 seconds
    And I want close item settings
    And I wait for 2 seconds
    And  I click display publish menu
    And I wait for 2 seconds
    And I click publish item
    And I wait for 2 seconds
    And I want open item settings
    And I wait for 2 seconds
    Then should excerpt has been modified
    And I wait for 2 seconds



  @user3 @web
  Scenario: Delete page
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    When I enter email "<USERNAME>"
    And I wait for 3 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click signIn
    And I wait for 2 seconds
    When I select page option in sidebar pages
    And I wait for 2 seconds
    And I want choose random item
    And I wait for 2 seconds
    And I want open item settings
    And I wait for 2 seconds
    And I want press delete posts button
    And I wait for 2 seconds
    And I want press confirm delete posts button
    And I wait for 2 seconds
    Then I want validate lists items, after delete
    And I wait for 2 seconds

  @user4 @web
  Scenario: Show only page by status
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
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
