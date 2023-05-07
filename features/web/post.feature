Feature: Posts

  #@user1 @web
  #Scenario: Create new post and validate in published list
  #  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  #  When I enter email "<USERNAME>"
  #  And I wait for 3 seconds
  #  And I enter password "<PASSWORD>"
  #  And I wait for 2 seconds
  #  And I click signIn
  #  And I wait for 2 seconds
  #  And I open new post
  #  And I wait for 2 seconds
  #  And I write title
  #  And I wait for 2 seconds
  #  And I write post
  #  And I wait for 2 seconds
  #  And I click display publish menu
  #  And I wait for 2 seconds
  #  And I select set it live now
  #  And I wait for 2 seconds
  #  And I click publish post
  #  And I wait for 3 seconds
  #  And click back list posts
  #  And I wait for 2 seconds
  #  Then I want validate post url
  #  And I wait for 2 seconds
  #  And I should show post in list
  #  And I wait for 2 seconds
  #  And I want navigate to published status post
  #  And I wait for 2 seconds
  #  And I want validate new post with published status
  #  And I wait for 2 seconds
#
  #@user2 @web
  #Scenario: Create new post and validate in draft list
  #  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  #  When I enter email "<USERNAME>"
  #  And I wait for 3 seconds
  #  And I enter password "<PASSWORD>"
  #  And I wait for 2 seconds
  #  And I click signIn
  #  And I wait for 2 seconds
  #  When I open new post
  #  And I wait for 2 seconds
  #  When I write title
  #  And I wait for 2 seconds
  #  And I write post
  #  And I wait for 2 seconds
  #  And click back list posts
  #  And I wait for 2 seconds
  #  Then I want validate post url
  #  And I wait for 2 seconds
  #  And I should show post in list
  #  And I wait for 2 seconds
  #  And I want navigate to draft status post
  #  And I wait for 2 seconds
  #  And I want validate new post with draft status
  #  And I wait for 2 seconds
#
  #@user3 @web
  #Scenario: Show only posts by status
  #  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  #  When I enter email "<USERNAME>"
  #  And I wait for 3 seconds
  #  And I enter password "<PASSWORD>"
  #  And I wait for 2 seconds
  #  And I click signIn
  #  And I wait for 2 seconds
  #  When I open all posts
  #  And I wait for 2 seconds
  #  And I open status filter
  #  And I wait for 2 seconds
  #  And I select filter draft option
  #  And I wait for 2 seconds
  #  And I want filter by DRAFT posts
  #  And I wait for 2 seconds
  #  Then I want validate that filter only contain DRAFT status

  #@user4 @web
  #Scenario: Show only posts by status and author
  #  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  #  When I enter email "<USERNAME>"
  #  And I wait for 3 seconds
  #  And I enter password "<PASSWORD>"
  #  And I wait for 2 seconds
  #  And I click signIn
  #  And I wait for 2 seconds
  #  When I open all posts
  #  And I wait for 2 seconds
  #  And I open status filter
  #  And I wait for 2 seconds
  #  And I select filter published option
  #  And I wait for 2 seconds
  #  And I want filter by PUBLISHED posts
  #  And I wait for 2 seconds
  #  And I open author filter
  #  And I wait for 2 seconds
  #  And I want choose filter by random author
  #  And I wait for 2 seconds
  #  Then I want validate that filter only contain PUBLISHED status
  #  And I wait for 2 seconds
  #  And I want validate posts lists only contain author selected in author filter
  #  And I wait for 2 seconds


  #Falta capturar el botón delete (Alguna veces lo toma , otras veces no y falla el test)
  @user5 @web
  Scenario: Show only posts by status and author
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    When I enter email "<USERNAME>"
    And I wait for 3 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click signIn
    And I wait for 2 seconds
    When I open all posts
    And I wait for 2 seconds
    And I want choose random posts
    And I wait for 2 seconds
    And I want open posts settings
    And I wait for 2 seconds
    And I want press delete posts button
    And I wait for 2 seconds
    And I want press confirm delete posts button
    And I wait for 2 seconds
    Then I want validate lists posts, post delete
    And I wait for 2 seconds