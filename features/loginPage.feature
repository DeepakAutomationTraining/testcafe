Feature: this feature includes automation of Login page of flip kart application

@Smoke
Scenario Outline: verify E2E negative validation for Flipkart application whether End User gets error message when user enters only Nine digits
Given User open flipkart url
When User clicks on the Login buttun and enters nine digit mobile number
Then User click on the request OTP button
Then User verifies the error message

@Smoke
Scenario Outline: verify GUI validation for Flipkart application whether End User able to view flipkart Logo
Given User open flipkart url
When User searches for Flipkart Logo
Then User able to view Flipkart Logo