Feature: Posts

  @user1 @web
  Scenario: Create new post with published status
    Given I navigate to page "<SIGN_IN_PAGE>"
    When I enter email "<USERNAME>"
    And I wait for 3 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click signIn
    And I wait for 2 seconds
    And I select page option in sidebar posts
    And I wait for 2 seconds
    And I want press new item button
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
    Then I want validate "<url_posts>" url
    And I wait for 2 seconds
    And I should show item in list
    And I wait for 2 seconds
    And I want validate new item with PUBLISHED status
    And I wait for 2 seconds

  @user2 @web
  Scenario: Create new post with draft status
    Given I navigate to page "<SIGN_IN_PAGE>"
    When I enter email "<USERNAME>"
    And I wait for 3 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click signIn
    And I wait for 2 seconds
    When I select page option in sidebar posts
    And I wait for 2 seconds
    And I want press new item button
    And I wait for 2 seconds
    When I write title
    And I wait for 2 seconds
    And I write body
    And I wait for 2 seconds
    And click back list items
    And I wait for 2 seconds
    Then I should show item in list
    And I wait for 2 seconds
    And I navigate to page "<url_draft_posts>"
    And I wait for 2 seconds
    And I want validate new post with draft status
    And I wait for 2 seconds

  @user3 @web
  Scenario: Update page
    Given I navigate to page "<SIGN_IN_PAGE>"
    When I enter email "<USERNAME>"
    And I wait for 3 seconds
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

  @user4 @web
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
    And I select page option in sidebar posts
    Then I want validate lists items, after delete
    And I wait for 2 seconds

  @user5 @web
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