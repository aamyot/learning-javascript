diamond = {
	
	render: function(letter) {
		var size = this.index(letter) + 1;

		var top = [];
		for (var i = 0; i < size; i++) {
			top.push(this.paddedLine(this.char(i), size*2-1));
		}

		var bottom = top.slice(0, top.length - 1).reverse();

		return top.concat(bottom);
	},

	line: function(letter) {
		if (letter === 'A') {
			return 'A';
		}
		return letter + this.blanks(this.index(letter)*2-1) + letter;
	},

	blanks: function(size) {
		var out = '';
		for (var i = 0; i < size; i++) {
			out += ' ';
		}
		return out;
	},

	index: function(letter) {
		return letter.charCodeAt(0) - 'A'.charCodeAt(0);
	},

	char: function(code) {
		return String.fromCharCode(code + 'A'.charCodeAt(0));
	},

	padding: function(line, length) {
		return this.blanks((length - line.length)/2) + line + this.blanks((length - line.length)/2);
	},

	paddedLine: function(char, length) {
		return this.padding(this.line(char), length);
	}

}
