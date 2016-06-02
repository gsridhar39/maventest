@Smoke
Feature: Login to account

Background:
Given launch the application

Scenario: valid username and password

When user enters valid username and password
## Define data table with with input values
|username	|password	|level		|
|scott		|tiger		|Developer|
|jim			|fox			|manager	|
And clicks on login button
Then User logged into the application

Scenario: Invalid username and password
When user enters invalid username and password
|username	|password	|
And clicks on login button
Then User log in is denied