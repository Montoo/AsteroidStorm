describe("Filter: puntjesfilter", function() {

    beforeEach(function(){
      //Wordt voor elke test uitgevoerd
      module("testApp.filters");

      inject(function($filter) {
          filter = $filter('puntjesFilter');
      });
    });

    it("should add dots while string length is shorter than 20", function() {
        var input = "Hello World!"; //13 chars
        var output = "Hello World!......."; //20 chars

        expect(filter(input)).toBe(output);
    });

    it("should return the string when the length is bigger then 20", function() {
        var input = "Goedemiddag World!!!"; //20 chars
        var output = "Goedemiddag World!!!";

        expect(filter(input)).toBe(output);
    });

    it("should return 20 dots when the string is undefined", function() {
      var input = undefined;
      var output = "....................";

      expect(filter(input)).toBe(output);
    });

});
