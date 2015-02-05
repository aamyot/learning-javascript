translator = {

    dictionary: {
        'M' : 1000,
        'CM': 900,
        'D' : 500,
        'DL': 400,
        'C' : 100,
        'XC': 90,
        'L' : 50,
        'XL': 40,
        'X' : 4,
        'IX': 9,
        'V' : 5,
        'IV': 4,
        'I' : 1
    },

    toArabic: function(roman) {

        var acc = 0;
        for (entry in this.dictionary) {
            while (roman.indexOf(entry) == 0) {
                acc += this.dictionary[entry];
                roman = roman.substring(entry.length);

            }
        }


        return acc;
    }
};