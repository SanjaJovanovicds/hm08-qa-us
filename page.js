module.exports = {
    // Inputs
    fromField: '#from',
    toField: '#to',
    phoneNumberField: '#phone',
    codeField: '#code',
    creditCardNumberField: '#number',
    cvvNumberField: 'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > form:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)',
    iceCreamCounterValue: '//div[normalize-space()="2"]',
    newCardCheckbox: '#card-1',
    messageToDriverField: '#comment',
    
    
    
    
    // Buttons
    callATaxiButton: 'button=Call a taxi',
    phoneNumberButton: '//div[starts-with(text(), "Phone number")]',
    nextButton: 'button=Next',
    confirmButton: 'button=Confirm',
    supportivePlanButton: 'div=Supportive',
    paymentMethodButton: '.pp-button.filled',
    addCardButton: '.pp-row.disabled',
    linkCardButton: 'div[class ="pp-buttons"] button[type ="submit"]',
    blanketAndHandkerchiefsButton: 'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(3) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > span:nth-child(2)',
    iceCreamPlusCounter: 'div[class ="r-group"] div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(3)',
    orderCarButton: 'button[class ="smart-button"]',
    driverInfoButton: 'div*=The driver will arrive',
    
    
    
   
    // Modals
    phoneNumberModal: '.modal',
    paymentMethodModal: '.payment-picker.open',
    carSearchModal: '.order-body',

    

    //supportivePlanModal: ' .supportive-plan-modal ',

    


    // Functions
    fillAddresses: async function(from, to) {
        const fromField = await $(this.fromField);
        await fromField.setValue(from);
        const toField = await $(this.toField);
        await toField.setValue(to);
        const callATaxiButton = await $(this.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await callATaxiButton.click();
    },
    fillPhoneNumber: async function(phoneNumber) {
        const phoneNumberButton = await $(this.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(this.phoneNumberModal);
        await phoneNumberModal.waitForDisplayed()
        const phoneNumberField = await $(this.phoneNumberField);
        await phoneNumberField.waitForDisplayed();
        await phoneNumberField.setValue(phoneNumber);
    },
    submitPhoneNumber: async function(phoneNumber) {
        await this.fillPhoneNumber(phoneNumber);
        // we are starting interception of request from the moment of method call
        await browser.setupInterceptor();
        await $(this.nextButton).click();
        // we should wait for response
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(2000);
        const codeField = await $(this.codeField);
        // collect all responses
        const requests = await browser.getRequests();
        // use first response
        await expect(requests.length).toBe(1)
        const code = await requests[0].response.body.code
        await codeField.setValue(code)
        await $(this.confirmButton).click()
    },

    fillcardNumberField: async function(number) {
        const paymentMethodButton = await $(this.paymentMethodButton);
        await paymentMethodButton.waitForDisplayed();
        await paymentMethodButton.click();
        const addCardButton = await $(this.addCardButton);
        await addCardButton.waitForDisplayed();
        await addCardButton.click();
        const cardNumberField = await $(this.cardNumberField);
        await cardNumberField.waitForDisplayed();
        await cardNumberField.setValue(number);
    },
    
    
    selectSupportivePlan: async function() {
        const supportPlanButton = await $(this.supportivePlanButton);
        await supportPlanButton.waitForDisplayed();
        await supportPlanButton.click();
        return supportPlanButton;
    },

    orderingIceCream: async function () {
    const iceCreamPlusButton = await $(this.iceCreamPlusButton);
    await iceCreamPlusButton.waitForDisplayed();
    await iceCreamPlusButton.click();
    await iceCreamPlusButton.click();

  },



  addCreditCard: async function(creditCardNumber, cvvNumber) {
    const paymentMethodButton = await $(this.paymentMethodButton);
    await paymentMethodButton.waitForDisplayed();
    await paymentMethodButton.click();
    const paymentMethodModal= await $(this.paymentMethodModal);
    await paymentMethodModal.waitForDisplayed();
    const addCardButton = await $(this.addCardButton);
    await addCardButton.waitForDisplayed();
    await addCardButton.click();
    const creditCardNumberField = await $(this.creditCardNumberField);
    await creditCardNumberField.setValue(creditCardNumber);
    const cvvNumberField = await $(this.cvvNumberField);
    await cvvNumberField.setValue(cvvNumber);
    const linkCardButton = await $(this.linkCardButton);
    //await linkCardButton.toBeClickable();
    await linkCardButton.click();
},

placeCarOrder: async function() {
    const orderCarButton = await $(this.orderCarButton);
    await orderCarButton.waitForDisplayed();
    await orderCarButton.click();
    return orderCarButton;
},


messageToDriver: async function(message) {
    const messageToDriverField = await $(this.messageToDriverField);
    //await messageToDriverField.waitForDisplayed();
    await messageToDriverField.setValue(message);

},

}
