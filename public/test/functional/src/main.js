module.exports = {
    'step one': (browser) => {
        browser.url('http://www.google.com');
        browser.waitForElementPresent('body', 1000);
        browser.setValue('input[type=text]', 'nightwatch');
        browser.pause(10000);
    },

    'step two': (browser) => {
        browser.url('http://www.oracle.com');
        browser.waitForElementPresent('body', 5000);
        browser.pause(10000);
    }
};