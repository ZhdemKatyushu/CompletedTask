const target = { width: 1366, height: 768};
module.exports = {
    tags: ['auth_not_registered'],
    'Authorization for not registered user': function (browser) {
        const page = browser.page.sbzendSettings();
        page
            .resizeWindow(target.width, target.height)
            .navigate()
            .waitForElementVisible('@logInButtonHomePage')
            .click('@logInButtonHomePage')
            .setValue('@userEmailInput', 'qq@qq.qq')
            .setValue('@userPasswordInput', '111111')
            .click('@eyeButton')
            .click('@logInButtonAuthPage')
            .waitForElementVisible('@notificationWindow')

        browser.saveScreenshot('./tests_output/auth_not_registered_user.jpeg')
    }
};