Feature: week6

  @user1 @web
  Scenario: step-1 | Create new post with draft status
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

  @user2 @web
  Scenario: step-2 | Create new tag
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

  @user5 @web
  Scenario: step-5 | Show only page by status
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

  @user6 @web
  Scenario: step-6 | Show only posts by status and author
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
  Scenario: step-7 | update facebook
    Given I navigate to page "<SIGN_IN_PAGE>"
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click signIn
    And I wait for 2 seconds
    When I navigate to page "<url_general>"
    And I wait for 2 seconds
    And I want expand setting menu site meta
    And I wait for 2 seconds
    And I fill fields twitter
    And I wait for 2 seconds
    And I want press save button general option
    And I wait for 2 seconds
    Then Validate twitter
    And I wait for 2 seconds