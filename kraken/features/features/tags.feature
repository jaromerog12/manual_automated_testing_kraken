Feature: Tags

@user1 @web
Scenario: Create new tag
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
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
  And I navigate to page "http://localhost:2368/ghost/#/tags"
  And I wait for 2 seconds
  Then I want validate tags in list
  And I wait for 2 seconds

  #@user2 @web
  #Scenario: Delete tag
  #  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  #  When I enter email "<USERNAME>"
  #  And I wait for 2 seconds
  #  And I enter password "<PASSWORD>"
  #  And I wait for 2 seconds
  #  And I click signIn
  #  And I wait for 2 seconds
  #  When I select page option in sidebar tags
  #  And I wait for 2 seconds
  #  And I want choose random item tags
  #  And I wait for 2 seconds
  #  And I want to press delete button
  #  And I wait for 2 seconds
  #  Then I validate that tag not exist in list
  #  And I wait for 2 seconds
