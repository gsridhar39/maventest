@Sanity
Feature: Transfer files

Scenario Outline: file transfer
Given "<src_status>" source account number
And "<dest_status>" reciepient account number
And with "<balance_status>" balances
Then "<transfer_status>" the amounts

##If we are using Exampels then we have use Scenario Outline as opposed to Scenario
Examples:
|src_status	|dest_status	|	balance_status	|	transfer_status	|
|valid	|valid	|sufficient	|successful	|
|valid	|valid	|insuficient	|unsuccessful	|
|valid	|invalid	|sufficient	|unsuccessful	|
