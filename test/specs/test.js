describe("Test the testing", function() {
    var aFilter, sFilter, rFactory, lFactory;
    beforeEach(function () {
        module('ngCookies');
        module('asteroidApp');
        inject(function ($filter, _RegisterFactory_, _LoginFactory_) {
            aFilter = $filter('AchievementFilter');
            sFilter = $filter('ScoreFilter');
            rFactory = _RegisterFactory_;
            lFactory = _LoginFactory_;
        });
    });
    it("should execute with success", function() {
        expect(true).toBeTruthy();
    });

    it('should return true', function () {
        expect(aFilter("Test", "get 100 points")).toBeTruthy();
    });

    it('should return false', function () {
        expect(aFilter("Ray", "get 100 points")).toBeFalsy();
    });

    it('should return true', function () {
        expect(aFilter("Test", "get 10000 points")).toBeFalsy();
    });

    it('should return 1337', function () {
       expect(sFilter("Test")).toBe("1337");
    });

    it('should return 0', function () {
        expect(sFilter("Ray")).toBe(0);
    });

    it('should return true', function () {
       expect(rFactory.registerFunction("Test", "test", "t", 't')).toBeTruthy();
    });

    it('should return true', function () {
       expect(lFactory.loginUser("Test", "test")).toBeTruthy();
    });

    it('should return false', function () {
        expect(lFactory.loginUser("Ray", "test")).toBeFalsy();
    });

    it('should return false', function () {
        expect(lFactory.loginUser("Test", "ray")).toBeFalsy();
    });
});
