
describe('Characters', function() {

	it('can be converted into unicode', function() {
	    expect("A".charCodeAt(0)).toEqual(65);
	});

	it('can be converted from a unicode', function() {
		expect(String.fromCharCode(65)).toEqual("A");
	});
});
