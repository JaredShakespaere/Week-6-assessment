import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

describe('tic tac toe game', async () => {
test('I can start a game', async () => {
    
    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
    await driver.sleep(2000)
}),

test('Play top left square', async () => {
    
    let leftSquare = await (await driver).findElement(By.id("cell-0"));
    await leftSquare.click();
    // expect(leftSquare.getText()).toEqual('X');
    
    await driver.sleep(2000)
    
}),


test('Play top right square', async () => {

    let rightSquare = await (await driver).findElement(By.id("cell-2"));
    await rightSquare.click();

    await driver.sleep(2000)
   
}),

test('Play lower right square', async () => {

    let lowerRightSquare = await (await driver).findElement(By.id("cell-8"));
    await lowerRightSquare.click();
    
    await driver.sleep(2000)
 
});
});
