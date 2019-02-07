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
  "error_message": "java.lang.AssertionError: expected [There is 2 error Authentication failed.] but found [There is 1 error Authentication failed.]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat stepDefinition.firstTest.error_message_is_displayed(firstTest.java:57)\r\n\tat ✽.error message is displayed(src/test/java/Features/FirstTest.feature:9)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
});