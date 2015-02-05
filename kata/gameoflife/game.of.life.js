
gameOfLife = {

    board: undefined,

    nextGeneration: function() {

        var nextGen = [];

        for (var row = 0; row < this.board.length; row++) {
            var line = [];
            for (var col = 0; col < this.board[row].length; col++) {
                var cell = this.board[row][col];

                var activeNeighbours = this.aliveNeighbours(row, col);

                if (activeNeighbours == 3) {
                    cell = 1;
                }

                if (activeNeighbours < 2 ||
                    activeNeighbours > 3) {
                    cell = 0;
                }
                line.push(cell);
            }
            nextGen.push(line);
        }

        return nextGen;
    },

    aliveNeighbours: function(row, col) {
        var offsets = [
            [-1,-1], [-1,  0], [-1, +1],
            [ 0,-1],           [ 0, +1],
            [+1,-1], [+1,  0], [+1, +1]
        ];

        var numNeighbours = 0;
        for (var i = 0; i < offsets.length; i++) {
            var offset = offsets[i];
            if (this.isAlive(row+offset[0], col+offset[1])) {
                numNeighbours++;
            }
        }

        return numNeighbours;
    },

    isAlive: function(row, col) {
        return this.board[row] !== undefined &&
               this.board[row][col] == 1;
    }
};

