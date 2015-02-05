require('./game.of.life.js');

describe('Game Of Life: ', function() {

    describe('Testing birth', function() {

        it('of a cell with exactly 3 alive neighbours', function() {

            gameOfLife.board = [
                [1, 1, 0],
                [1, 0, 0],
                [0, 0, 0]
            ];
            var nextGen = [
                [1, 1, 0],
                [1, 1, 0],
                [0, 0, 0]
            ];
            expect(gameOfLife.nextGeneration()).toEqual(nextGen);
        });

    });

    describe('Counting neighbours', function() {

        it('a cell in a board with 1 cell has 0 neighbour', function() {
            gameOfLife.board = [
                [1]
            ];
            expect(gameOfLife.aliveNeighbours(0, 0)).toEqual(0);
        });

        it('a cell in a 2 by 2 board has 3 alive neighbours', function() {
            gameOfLife.board = [
                [1,1],
                [1,0]
            ];
            expect(gameOfLife.aliveNeighbours(1, 1)).toEqual(3);
        });

        it('of a cell with more than 3 neighbours', function() {

            gameOfLife.board = [
                [1, 1],
                [1, 1],
                [1, 1]
            ];
            expect(gameOfLife.aliveNeighbours(2, 0)).toEqual(3);
        });
    });

    describe('Alive cell', function() {

        it('should return true if a selected cell is alive', function() {
            gameOfLife.board = [
                [1]
            ];
            expect(gameOfLife.isAlive(0, 0)).toEqual(true);
        });

        it('should return false if a selected cell is not on board', function() {
            gameOfLife.board = [
                [1]
            ];
            expect(gameOfLife.isAlive(-1, 0)).toEqual(false);
            expect(gameOfLife.isAlive(10, 0)).toEqual(false);
            expect(gameOfLife.isAlive( 0,-1)).toEqual(false);
            expect(gameOfLife.isAlive( 0,10)).toEqual(false);
        });
    });

    describe('Testing longevity', function() {

        it('of a cell with 2 or 3 neighbours', function() {

            gameOfLife.board = [
                [1, 1],
                [1, 1]
            ];
            var nextGen = [
                [1, 1],
                [1, 1]
            ];
            expect(gameOfLife.nextGeneration()).toEqual(nextGen);
        });

    });

    describe('Testing death', function() {

        it('of a cell with less that 2 neighbours', function() {

            gameOfLife.board = [
                [0, 0],
                [1, 0]
            ];
            var nextGen = [
                [0, 0],
                [0, 0]
            ];
            expect(gameOfLife.nextGeneration()).toEqual(nextGen);
        });

        it('of a cell with more than 3 neighbours', function() {

            gameOfLife.board = [
                [1, 1],
                [1, 1],
                [1, 1]
            ];
            var nextGen = [
                [1, 1],
                [0, 0],
                [1, 1]
            ];
            expect(gameOfLife.nextGeneration()).toEqual(nextGen);
        });

    });

});


