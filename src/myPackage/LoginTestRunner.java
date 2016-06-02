package myPackage;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@RunWith(Cucumber.class)
@CucumberOptions(
		monochrome=true,
		features="src/myPackage",
		plugin={"pretty","html:target/cucumber-html-report"},
		tags={"@Smoke"}
		)
// for testng.xml we need
//public class LoginTestRunner extends AbstractTestNGCucumberTests{}
//for junit
public class LoginTestRunner{}
