var Pizza = function(topping) {
    this.topping = topping;
}

Pizza.prototype = {
    bake: function() {
        this.ready = true;
    }
}

describe('Classes', function() {

    describe('Prototype', function() {

        it('allows to add methods', function() {

            expect(new Pizza().bake).toBeDefined();
        });

        it('allows to execute methods', function() {
            var pizza = new Pizza();
            pizza.bake();

            expect(pizza.ready).toEqual(true);
        });
    });

    describe('Instantiation', function() {

        it('returns different instances when attributes are different', function() {
            expect(new Pizza('cheese')).not.toEqual('pepperoni');
        });

        it('returns equal instances when attributes are the same', function() {
            expect(new Pizza('cheese')).toEqual(new Pizza('cheese'));
        });

        it('returns different instances', function() {
            expect(new Pizza('cheese')).not.toBe(new Pizza('cheese'));
        });

    });
});