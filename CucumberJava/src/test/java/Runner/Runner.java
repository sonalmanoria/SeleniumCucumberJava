package Runner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		
	features= {"src/test/java/Features/FirstTest.feature"},
	glue= {"stepDefinition"},
	monochrome=true,
	plugin= {"pretty","html:target/test_report"},
	dryRun=false
)


public class Runner {

}
