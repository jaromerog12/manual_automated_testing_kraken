Feature: Navigation

  #@user3 @web
  #Scenario: Delete item navbar
  #  Given I navigate to page "<SIGN_IN_PAGE>"
  #  When I enter email "<USERNAME>"
  #  And I wait for 2 seconds
  #  And I enter password "<PASSWORD>"
  #  And I wait for 2 seconds
  #  And I click signIn
  #  And I wait for 2 seconds
  #  And I navigate to page "<url_settings_navigation>"
  #  And I wait for 2 seconds
  #  And I want add new item to navbar
  #  And I wait for 2 seconds
  #  And I press save button
  #  And I navigate to page "<url_home_page>"
  #  And I wait for 2 seconds
  #  And I navigate to page "<url_settings_navigation>"
  #  And I wait for 2 seconds
  #  And I want press delete item navbar button
  #  And I wait for 2 seconds
  #  And I press save button
  #  And I wait for 2 seconds
  #  And I navigate to page "<url_home_page>"
  #  And I wait for 2 seconds
  #  Then I want validate item not exist in navbar
  #  And I wait for 2 seconds
#
  @user4 @web
  Scenario: Delete item second navbar
    Given I navigate to page "<SIGN_IN_PAGE>"
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click signIn
    And I wait for 2 seconds
    And I navigate to page "<url_settings_navigation>"
    And I wait for 2 seconds
    And I want add new item to second navbar
    And I wait for 2 seconds
    And I press save button
    And I navigate to page "<url_home_page>"
    And I wait for 2 seconds
    And I navigate to page "<url_settings_navigation>"
    And I wait for 2 seconds
    And I want press delete item second navbar button
    And I wait for 2 seconds
    And I press save button
    And I wait for 2 seconds
    And I navigate to page "<url_home_page>"
    And I wait for 2 seconds
    Then I want validate item not exist in second navbar
    And I wait for 2 seconds
##
