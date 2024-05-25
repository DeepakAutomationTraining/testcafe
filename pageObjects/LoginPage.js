import { Selector, t } from 'testcafe';
import BasePage from "./BasePage";

class LoginPage extends BasePage {
    constructor(){
        super()
            this.mobileNumber=Selector('form[autocomplete="on"] > div > input');
            this.requestOtpButton=Selector('button').withExactText('Request OTP')
            this.errorMessage=Selector('span').withExactText('Please enter valid Email ID/Mobile number')
            this.loginButton=Selector('a[href="/account/login?ret=/"]')
            this.flipkartLogo=Selector('img[title="Flipkart"]')
        
    }

    async navigateTOFlipkart(){
        await t.maximizeWindow()
        await t.navigateTo("https://www.flipkart.com");
        await t. wait(2000)

    }
    async clickLoginbutton(){
        await t.click(this.loginButton)
    }

    async getMobileNumber() {
        
        await t.setNativeDialogHandler(() => true)
        await t.typeText(this.mobileNumber, "839083654");
    }
    async clickOnRequestOtpbutton(){
        await t.click(this.requestOtpButton)
    }
    async verifyErrorMessage(){
        await t.expect((this.errorMessage).textContent).eql('Please enter valid Email ID/Mobile number')
        console.log("User validated the error message - Please enter valid Email ID/Mobile number")

    }
    async validateFlipKartLogo(){
        await t.expect(Selector(this.flipkartLogo).exists).ok()
        console.log("User validated that Flipkart Logo is present")
    }
};
export default LoginPage
  