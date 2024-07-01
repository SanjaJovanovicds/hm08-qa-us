Sprint 8 Project: Urban Routes Functionality Testing

Project Description
This project is designed to test the functionality of the Urban Routes app. WebdriverIO E2E tests were created to test the app's UI and ensure the functionality of the full process of ordering a taxi.

Technologies Used
IDE: Visual Studio Code
Runtime Environment: Node.js
Package Manager: npm
Test Automation Framework: WebdriverIO
Browser: Chrome

Configuration
Clone the Repository:

Open your preferred terminal emulator.
Ensure you've created a directory to store the project.
Clone the repo using the following command based on your authentication strategy:
HTTPS: git clone https://github.com/SanjaJovanovicds/hm08-qa-us-main.git
SSH: git clone git@github.com/SanjaJovanovicds/hm08-qa-us-main.git

Install NPM Dependencies:

Navigate to the main project folder (/hm08-qa-us) in the terminal.
Run the following command:
npm install

Set the Test URL:

Start the Urban Routes server and copy the server URL.
Open the wdio.config.js file.
Set the baseUrl variable to the server URL.

Running Tests
Examine the UI:

Use the Urban Routes app and DevTools to inspect the UI.
Create Test Cases:

In Visual Studio Code, use the template provided in the createAnOrder.e2e.js file to create test cases for checking the full process of ordering a taxi.
Name the tests appropriately to identify what you are testing. Comment the test names.

Organize Your Code:

Use the page.js module file to organize and maintain your code.
Use DevTools to find elements in your UI and add missing locators to your Inputs, Buttons, and Modals.
Create functions for the test cases to reduce repetitive code.

Create Specific Test Cases:

Create test cases for the following scenarios:
Setting an address
Selecting the supportive plan
Filling in the phone number
Adding a credit card
Writing a message for the driver
Ordering a blanket and handkerchiefs
Ordering 2 ice creams
Inspecting the search modal appearing
Inspecting the driver information display

Use Assertions:

Use the expect command and "matcher" to compare actual and expected results.
Save and Run Tests:

Save your tests before running them.
When you're ready to run the tests, use the following command:
npm run wdio

Check Test Results:

Check if the tests passed or failed.
Verify the expected and received results.
Save Tests: Ensure all tests are saved before executing them.
Update URLs: Always update the base URL in wdio.config.js before running the tests.

