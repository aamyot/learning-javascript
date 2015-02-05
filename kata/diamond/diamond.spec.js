require('./diamond');

describe('Diamond', function() {

	it('renders A', function () {
		expect(diamond.render('A')).toEqual(['A']);
	});

	it('renders X spaces', function() {
		expect(diamond.blanks(4)).toEqual('    ');
	});

	it('translates a char into its index', function() {
		expect(diamond.index('C')).toEqual(2);
	});

	it('renders a line with appropriate spacing between chars', function() {
		expect(diamond.line('D')).toEqual('D     D');
		expect(diamond.line('A')).toEqual('A');
	});

	it('pads a line with blanks up to a specific size', function() {
		expect(diamond.padding('ABC', 7)).toEqual('  ABC  ');
	});

	it('renders a line with the appropriate padding', function() {
		expect(diamond.paddedLine('C', 9)).toEqual('  C   C  ');
	});

	it('renders B', function() {
		expect(diamond.render('B')).toEqual([
			' A ',
			'B B',
			' A '
		]);
	});

	it('renders E', function() {
		expect(diamond.render('E')).toEqual([
			'    A    ',
			'   B B   ',
			'  C   C  ',
			' D     D ',
			'E       E',
			' D     D ',
			'  C   C  ',
			'   B B   ',
			'    A    '
		]);
	});

});
