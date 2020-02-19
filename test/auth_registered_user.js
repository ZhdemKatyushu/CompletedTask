const target = { width: 1366, height: 768};
module.exports = {
    tags: ['auth_registered'],
    'Authorization for not registered user': function (browser) {
        const page = browser.page.sbzendSettings();
        page
            .resizeWindow(target.width, target.height)
            .navigate()
            .waitForElementVisible('@logInButtonHomePage')
            .click('@logInButtonHomePage')
            .setValue('@userEmailInput', 'ssls.automation+666@gmail.com')
            .setValue('@userPasswordInput', '123456')
            .click('@eyeButton')
            .click('@logInButtonAuthPage')
            .waitForElementVisible('@userButton')
            .assert.containsText('@userButton', 'ssls.automation+666@gmail.com')

           browser.saveScreenshot('./tests_output/auth_registered_user.jpeg')
    }

};