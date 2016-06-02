package myPackage;

import java.util.List;
import java.util.Map;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStep {
//	Given: launch the application
//	When: user enters valid username and password
//	And: clicks on login button
//	Then: User logged into the application
	
	//hooks
	@Before
	public void doBefore(){
		System.out.println("*** This is from Before");
	}
	
	@After
	public void doafter(){
		System.out.println("*** This is after");
	}
	
	@Given("launch the application")
	public void launch_the_application(){
		System.out.println("Launch the application");
		
	}

	@When("^user enters ([a-zA-Z]{1,}) username and password$")
	public void user_enters_username_and_password(String status, DataTable data){
		System.out.println("user enters " +status+ " username and password");
		
		List<Map<String, String>> list=
				data.asMaps(String.class, String.class);
		System.out.println("****Values from Data Table***********");
		
		for (Map<String, String> temp : list) {
			
			System.out.println("Username:" + temp.get("username"));
			System.out.println("Password:" + temp.get("password"));
			if (temp.get("level")!=null){
			System.out.println("Level:" + temp.get("level"));}
		}
	}
	
	@And("clicks on login button")
	public void clicks_on_login_button(){
		System.out.println("clicks on login button");
		
	}
	
	@Then("User logged into the application")
	public void User_logged_in(){
		System.out.println("User logged into the application");
	}
	
	/*@When("user enters valid username and invalid password")
	public void user_enters_valid_username_and_invalid_password(){
		System.out.println("user enters valid username and invalid password");
	}
	*/
	
	@Then("User log in is denied")
	public void User_login_denied(){
		System.out.println("User log in is denied");
	}

}
