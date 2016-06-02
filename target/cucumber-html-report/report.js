$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login to account",
  "description": "",
  "id": "login-to-account",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStep.launch_the_application()"
});
formatter.result({
  "duration": 203943672,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "valid username and password",
  "description": "",
  "id": "login-to-account;valid-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "user enters valid username and password",
  "rows": [
    {
      "comments": [
        {
          "line": 10,
          "value": "## Define data table with with input values"
        }
      ],
      "cells": [
        "username",
        "password",
        "level"
      ],
      "line": 11
    },
    {
      "cells": [
        "scott",
        "tiger",
        "Developer"
      ],
      "line": 12
    },
    {
      "cells": [
        "jim",
        "fox",
        "manager"
      ],
      "line": 13
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User logged into the application",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 12
    }
  ],
  "location": "LoginStep.user_enters_username_and_password(String,DataTable)"
});
formatter.result({
  "duration": 5639108,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clicks_on_login_button()"
});
formatter.result({
  "duration": 91925,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.User_logged_in()"
});
formatter.result({
  "duration": 88355,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStep.launch_the_application()"
});
formatter.result({
  "duration": 109328,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Invalid username and password",
  "description": "",
  "id": "login-to-account;invalid-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "user enters invalid username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 19
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User log in is denied",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 12
    }
  ],
  "location": "LoginStep.user_enters_username_and_password(String,DataTable)"
});
formatter.result({
  "duration": 228920,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clicks_on_login_button()"
});
formatter.result({
  "duration": 66936,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.User_login_denied()"
});
formatter.result({
  "duration": 88802,
  "status": "passed"
});
});