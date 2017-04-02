describe('E2E: Scores page test', function () {
    var rFactory, lFactory;
    beforeEach(function () {
        browser.get('http://127.0.0.1:8080/#!/register');
    });


    it('should display the correct score table', function () {

        //REGISTER
        element(by.id('username')).sendKeys('Test');
        element(by.id('password')).sendKeys('test');
        element(by.id('firstName')).sendKeys('test');
        element(by.id('lastName')).sendKeys('test');
        element(by.id('submitButton')).click();
        browser.sleep(1000);

        browser.get('http://127.0.0.1:8080/#!/login');
        browser.sleep(1000);

        // LOGIN
        element(by.id('username')).sendKeys('Test');
        element(by.id('password')).sendKeys('test');
        element(by.id('loginB')).click();

        //TEST

        browser.get('http://127.0.0.1:8080/#!/scores');
        browser.sleep(1000);

        var rows = element.all(by.repeater('score in scoreSet')).count();

        expect(rows).toBe(1);
    });
    browser.pause();
});