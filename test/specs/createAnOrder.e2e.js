const page = require('../../page');
const helper = require('../../helper')

describe( 'Create an order', () => {
    it( 'should set the address', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const fromField = await $('#from');
        const toField = await $('#to');
        await expect(fromField).toHaveValue('East 2nd Street, 601');
        await expect(toField).toHaveValue('1300 1st St');
    })
})
    
    it('should click Suportive Plan button', async () => {
        await browser.url(`/`)
        await page.fillAddresses( 'East 2nd street, 601', '1300 1 st St');
        const supportivePlanButton = await page.selectSupportivePlan();
        await expect(supportivePlanButton.parentElement()).toHaveElementClass('active');

    })


    it('should fill the phone number', async () => {
    await browser.url('/')
    await page.fillAddresses( 'East 2nd Street, 601', '1300 1st St');
    const phoneNumber = helper.getPhoneNumber("+1");
    await page.submitPhoneNumber(phoneNumber);
    await expect(await helper.getElementByText(phoneNumber)).toBeExisting();

})

    it('should add credit card number and CVV in payment modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await browser.waitUntil(async () => {
            const paymentMethodButton = await $(page.paymentMethodButton);
            return await paymentMethodButton.isDisplayed();
            }, {
                timeout: 10000,
                message: 'Payment method button not displayed after filling addresses'
            });
        await page.addCreditCard('1234 0000 4321 0000', '12');
        const newCardCheckbox = await $(page.newCardCheckbox);
        await expect(newCardCheckbox).toBeSelected(); 

})   

   it('should write a message', async () => {
    await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.messageToDriver('Hello!');
        const completedMessage = await $(page.messageToDriverField);
        await expect(completedMessage).toHaveValue('Hello!');
})


   it('should order two ice creams', async () => {
    await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportivePlan();
        const iceCreamPlusCounter = await $(page.iceCreamPlusCounter);
        await iceCreamPlusCounter.waitForDisplayed();
        await iceCreamPlusCounter.click();
        await iceCreamPlusCounter.click();
        const iceCreamCounterValue = await $(page.iceCreamCounterValue);
        await expect(iceCreamCounterValue).toHaveTextContaining('2');
    
})

  it('should select blanket and handkerchiefs', async () => {
    await browser.url(`/`);
    await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    await page.selectSupportivePlan();
    const blanketAndHandkerchiefs = await $(page.blanketAndHandkerchiefsButton);
    await blanketAndHandkerchiefs.waitForDisplayed();
    await blanketAndHandkerchiefs.click();
    await expect(blanketAndHandkerchiefs).toBeEnabled();


  })

  it('should display a car search modal after placing an order', async () => {
    await browser.url(`/`);
    await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    const phoneNumber = helper.getPhoneNumber("+1");
    await page.submitPhoneNumber(phoneNumber);
    await page.placeCarOrder();
    const carSearchModal = await $(page.carSearchModal);
    await expect(carSearchModal).toBeExisting();
})

it('should display driver info', async () => {
    await browser.url(`/`);
    await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    const phoneNumber = helper.getPhoneNumber("+1");
    await page.submitPhoneNumber(phoneNumber);
    await page.messageToDriver('Hello!');
    await page.placeCarOrder();
    const driverInfo = await $(page.driverInfoButton);
    console.log("driverInfo exists, waiting for it to be displayed...");
    await browser.pause(35000);
    await expect(driverInfo).toBeExisting();
})

