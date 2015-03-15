describe('factors', function(){
    it('should exist', function(){
        expect(factors).toBeDefined();
    });

    describe('of', function(){
        it('should determine prime factors', function(){
            var expected = {
                2 : [2],
                4 : [2, 2],
                3 : [3],
                5 : [5],
                6 : [2, 3]
            };
            for (var n in expected){
                expect(factors.of(parseInt(n))).toEqual(expected[n]);
            }
        });
    });
});
