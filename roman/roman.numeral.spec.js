require('./roman.translator');

describe('Roman Numerals Translator: ', function() {

    describe('Roman to Arabic', function() {

        it('has a function to translate roman to arabic', function() {
            expect(translator.toArabic).toBeDefined();
        });

        it('translates I to 1', function() {
            expect(translator.toArabic('I')).toEqual(1);
        });

        it('translates II to 2', function() {
            expect(translator.toArabic('II')).toEqual(2);
        });

        it('translates III to 3', function() {
            expect(translator.toArabic('III')).toEqual(3);
        });

        it('translates IV to 4', function() {
            expect(translator.toArabic('IV')).toEqual(4);
        });

        it('translates V to 5', function() {
            expect(translator.toArabic('IV')).toEqual(4);
        });

        it('translates MCCCXCVIII to 1398', function() {
            expect(translator.toArabic('MCCCXCVIII')).toEqual(1398);
        });
    });

    describe('Arabic to roman', function() {

    });
});