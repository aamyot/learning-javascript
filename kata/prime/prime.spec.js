require('./prime');

describe('Prime Factors', function() {

    describe('Target:', function() {

       it('1428', function() {
           expect(prime.decompose(1428)).toEqual([2,2,3,7,17]);
       });
    });

    describe('Steps:', function() {

        it('can decompose 1', function() {
            expect(prime.decompose(1)).toEqual([]);
        });

        it('can decompose 2', function() {
            expect(prime.decompose(2)).toEqual([2]);
        });

        it('can decompose 4', function() {
            expect(prime.decompose(4)).toEqual([2,2]);
        });

        it('can decompose 27', function() {
            expect(prime.decompose(27)).toEqual([3,3,3]);
        });

        it('can decompose 24', function() {
            expect(prime.decompose(24)).toEqual([2,2,2,3]);
        });
    });
});