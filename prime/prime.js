prime = {

    decompose: function(number) {
        var primes = [];

        var candidate = 2;
        while (number > 1) {
            while (number % candidate == 0) {
                 primes.push(candidate);
                 number = number / candidate;
            }
            candidate++;

        }
        return primes;

    }
}