import { Selector, t } from 'testcafe';

class BasePage {

    async closeWindow(){
        await t.closeWindow()
    }
}
export default BasePage

