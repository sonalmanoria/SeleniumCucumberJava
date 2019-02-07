package stepDefinition;


import cucumber.api.Scenario;
import cucumber.api.java.After;
//import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
//import cucumber.api.java.en.And;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;



public class firstTest {
	
	WebDriver driver;
	

@Given("user is on homepage")
public void user_is_on_homepage() {
	String path =System.getProperty("user.dir");
    System.setProperty("webdriver.chrome.driver", path+"\\drivers\\chromedriver\\chromedriver.exe");
    driver=new ChromeDriver();
    driver.manage().window().maximize();
	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    driver.get("http://automationpractice.com/index.php");
}

@When("user navigates to Login Page")
public void user_navigates_to_Login_Page() {
	driver.findElement(By.cssSelector(".login")).click();
}

@When("user enters incorrect username and incorrect Password")
public void user_enters_incorrect_username_and_incorrect_Password() {
	driver.findElement(By.cssSelector("#email")).sendKeys("sonalaria@gmail.com");
	driver.findElement(By.cssSelector("#passwd")).sendKeys("password");
}

@When("user select the sign in button")
public void user_select_the_sign_in_button() {
	driver.findElement(By.cssSelector("#SubmitLogin")).click();
}

@Then("error message is displayed")
public void error_message_is_displayed() {
	String error = driver.findElement(By.cssSelector(".alert.alert-danger")).getText().replace("\n", " ");
	Assert.assertEquals(error, "There is 1 error Authentication failed.");
}

@After
public void tearDown(Scenario scenario) {
    if (scenario.isFailed()) {
      // Take a screenshot...
      final byte[] screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
      scenario.embed(screenshot, "image/png"); // ... and embed it in the report.
      driver.close();
  	  driver.quit();
    }
}

}