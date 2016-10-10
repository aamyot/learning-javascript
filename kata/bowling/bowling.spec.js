var expect = require("expect.js");
var BowlingGame = require("./bowling");

describe("Bowling score", function() {
  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  it("is 0 for a gutter game", function() {
    rollMany(20, 0);

    expect(game.score()).to.be(0);
  });

  it("returns the total of all pins for a game with only open frames", function() {
    rollMany(20, 1);

    expect(game.score()).to.be(20);
  });

  it("adds the pins of the next roll after a spare", function() {
    rollSpare();
    game.roll(3);
    rollMany(17, 0);

    expect(game.score()).to.be(16);
  });

  it("adds the pins of the next 2 rolls after a strike", function() {
    rollStrike();
    game.roll(3);
    game.roll(6);
    rollMany(16, 0);

    expect(game.score()).to.be(28);
  });

  it("calculates the score for a perfect game", function() {
    rollMany(12, 10);

    expect(game.score()).to.be(300);
  });

  it("calculates the score for a perfect game", function() {
    rollMany(12, 10);

    expect(game.score()).to.be(300);
  });

  it("calculates the score with only spares", function() {
    rollMany(21, 5);

    expect(game.score()).to.be(150);
  });

  function rollMany(rolls, pins) {
    for (var i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  }

  function rollStrike() {
    game.roll(10);
  }

  function rollSpare() {
    game.roll(5);
    game.roll(5);
  }
});
