describe('Arrays', function () {

    describe('Clone', function () {

        var array = ['Apple', 'Orange', 'Banana'];

        it('can be copied with slice', function () {
            expect(array.slice(0)).toEqual(array);
        });

        it('but are different instances', function() {
            expect(array.slice(0)).not.toBe(array);
        });
    });
});