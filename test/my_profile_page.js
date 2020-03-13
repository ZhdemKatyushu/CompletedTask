const { selectorSheme } = require('./selectorSheme');
const target = { width: 1366, height: 768};

const inputValues = [];

async function collectValues(browser) {
    const userRelationObject = {};

    for (const { key, query } of selectorSheme) {
        const { value } = await browser.getAttribute('css selector', query, 'innerHTML');
        userRelationObject[key] = value;
    }

    inputValues.push(userRelationObject);
}

function compareCollectedValueSets() {
    return inputValues.every(
        inputValue => selectorSheme.every(
            ({ key }) => inputValue[key] === inputValues[0][key]
        )
    );
}

module.exports = {
    tags: ['my_profile_page'],
    'My profile page. Client area.': async function (browser) {
        const page = await browser.page.sbzendSettings();
        await page
            .resizeWindow(target.width, target.height)
            .navigate()
            .waitForElementVisible('@logInButtonHomePage')
            .click('@logInButtonHomePage')
            .setValue('@userEmailInput', 'ssls.automation+666@gmail.com')
            .setValue('@userPasswordInput', '123456')
            .click('@eyeButton')
            .click('@logInButtonAuthPage')
            .waitForElementVisible('@triangleButton')
            .click('@triangleButton')
            .click('@viewProfileButton')
            .waitForElementVisible('@pageContentViewProfilePage')

        await collectValues(browser);
             page
                .click('@triangleButton')
                .click('@logOutButton')

                .waitForElementVisible('@logInButtonHomePage')
                .click('@logInButtonHomePage')
                .setValue('@userEmailInput', 'ssls.automation+666@gmail.com')
                .setValue('@userPasswordInput', '123456')
                .click('@eyeButton')
                .click('@logInButtonAuthPage')
                .waitForElementVisible('@triangleButton')
                .click('@triangleButton')
                .click('@viewProfileButton')
                .waitForElementVisible('@pageContentViewProfilePage')


        await collectValues(browser);

        const areCollectedValuesEqual = compareCollectedValueSets();
        console.log(areCollectedValuesEqual ? 'Values are equal' : 'Values have difference');
    }


};