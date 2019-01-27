$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Features/FirstTest.feature");
formatter.feature({
  "name": "Login Feature",
  "description": "  Verify if user is able to Login in to the site",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login as a authenticated user",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "firstTest.user_is_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to Login Page",
  "keyword": "When "
});
formatter.match({
  "location": "firstTest.user_navigates_to_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters incorrect username and incorrect Password",
  "keyword": "And "
});
formatter.match({
  "location": "firstTest.user_enters_incorrect_username_and_incorrect_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select the sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "firstTest.user_select_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "firstTest.error_message_is_displayed()"
});
formatter.result({
  "status": "passed"
});
});