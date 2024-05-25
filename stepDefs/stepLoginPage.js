import LoginPage from '../pageObjects/LoginPage.js';

const { Given, When, And, Then, Before } = require('@cucumber/cucumber');

const loginPage = new LoginPage()

Before('Prerequisites', async(t) => {})

Given('User open flipkart url', async (t) => {
        await loginPage.navigateTOFlipkart()
    });

    When('User clicks on the Login buttun and enters nine digit mobile number', async (t) => {
        await loginPage.clickLoginbutton()
        await loginPage.getMobileNumber()
    });

    Then('User click on the request OTP button', async (t) => {
        await loginPage.clickOnRequestOtpbutton()
    });

    Then('User verifies the error message', async (t) => {
        await loginPage.verifyErrorMessage()
    });
 
    When('User searches for Flipkart Logo', async (t) => {
        console.log("User is searching for flipkart logo")
    })

    Then('User able to view Flipkart Logo', async (t) => {
        await loginPage.validateFlipKartLogo()
    }) 