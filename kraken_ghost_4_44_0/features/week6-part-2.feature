Feature: week6-part-2

  @user3 @web
  Scenario: Delete tag
    Given I navigate to page "<SIGN_IN_PAGE>"
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click signIn
    And I wait for 2 seconds
    When I select page option in sidebar tags
    And I wait for 2 seconds
    And I want choose random item tags
    And I wait for 2 seconds
    And I want to press delete button
    And I wait for 2 seconds
    And I want to press confirm delete button
    And I wait for 2 seconds
    Then I validate that tag not exist in list
    And I wait for 2 seconds

  @user4 @web
   Scenario: Show only pages by status and author
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
    And I open author filter
    And I wait for 2 seconds
    And I want choose filter by random author
    And I wait for 2 seconds
    Then I want validate that filter only contain PUBLISHED status
    And I wait for 2 seconds
    And I want validate posts lists only contain author selected in author filter
    And I wait for 2 seconds

  @user8 @web
  Scenario: update metadata
    Given I navigate to page "<SIGN_IN_PAGE>"
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click signIn
    And I wait for 2 seconds
    When I navigate to page "<url_general>"
    And I wait for 2 seconds
    And I want expand 1 menu site meta
    And I wait for 2 seconds
    And I fill fields metadata
    And I wait for 2 seconds
    And I want press save button general option
    And I wait for 2 seconds
    Then Validate metadata
    And I wait for 2 seconds

  @user9 @web
  Scenario: update title
    Given I navigate to page "<SIGN_IN_PAGE>"
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click signIn
    And I wait for 2 seconds
    When I navigate to page "<url_general>"
    And I wait for 2 seconds
    And I want expand setting-first menu
    And I wait for 2 seconds
    And I fill field title
    And I wait for 2 seconds
    And I want press save button general option
    And I wait for 2 seconds
    And I navigate to page "<url_home_page>"
    And I wait for 2 seconds
    Then Validate title in home page
    And I wait for 2 seconds

  @user10 @web
  Scenario: update Twitter
    Given I navigate to page "<SIGN_IN_PAGE>"
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click signIn
    And I wait for 2 seconds
    When I navigate to page "<url_general>"
    And I wait for 2 seconds
    And I want expand 2 menu site meta
    And I wait for 2 seconds
    And I fill fields twitter
    And I wait for 2 seconds
    And I want press save button general option
    And I wait for 2 seconds
    Then Validate twitter
    And I wait for 2 seconds