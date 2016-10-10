var BowlingGame = function() {};

BowlingGame.prototype = {
  rolls: [],
  currentRoll: 0,

  roll: function(pins) {
    this.rolls[this.currentRoll++] = pins;
  },

  score: function() {
    var score = 0;
    var frameIndex = 0;
    for (var frame = 0; frame < 10; frame++) {
      if (this.isStrike(frameIndex)) {
        score += (10 + this.strikeBonus(frameIndex));
        frameIndex++;
      } else if (this.isSpare(frameIndex)) {
        score += (10 + this.spareBonus(frameIndex));
        frameIndex += 2;
      } else {
        score += this.totalPinsForFrame(frameIndex)
        frameIndex += 2;
      }
    }
    return score;
  },

  isStrike: function(frameIndex) {
    return this.rolls[frameIndex] == 10;
  },

  isSpare: function(frameIndex) {
    return this.totalPinsForFrame(frameIndex) == 10;
  },

  strikeBonus: function(frameIndex) {
    return this.rolls[frameIndex+1] + this.rolls[frameIndex+2];
  },

  spareBonus: function(frameIndex) {
    return this.rolls[frameIndex + 2];
  },

  totalPinsForFrame(frameIndex) {
    return this.rolls[frameIndex] + this.rolls[frameIndex+1];
  }
};

module.exports = BowlingGame;
