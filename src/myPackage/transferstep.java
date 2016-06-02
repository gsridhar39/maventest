package myPackage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class transferstep {
	
	/*
	 Given "<src_status>" source account number
	And "<dest_status>" reciepient account number
	And with "<balance_status>" balances
	Then "<transfer_status>" the amounts
	 */
	@Given("^\"([a-zA-Z]{1,})\" source account number$")
	public void valid_source_account_number(String srcStatus) throws Throwable {
			System.out.println(srcStatus +" account number");
	}

	@Given("^\"([a-zA-Z]{1,})\" reciepient account number$")
	public void valid_reciepient_account_number(String desStatus) throws Throwable {
		System.out.println(desStatus +" reciepient account number");
	}

	@Given("^with \"([a-zA-Z]{1,})\" balances$")
	public void with_sufficent_balances(String balStatus) throws Throwable {
		System.out.println("enter with " + balStatus +" balances");
	}
	

	@Then("^\"([a-zA-Z]{1,})\" the amounts$")
	public void transfer_the_amounts(String tstatus) throws Throwable {
		System.out.println("enter " + tstatus +" transfer the amounts");
	}

}





