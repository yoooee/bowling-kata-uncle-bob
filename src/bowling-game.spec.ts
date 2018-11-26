class Game{
  private _rolls: Array<number> = [];
  private _currentRoll: number = 0;

  public roll(pins: number) {
    this._rolls[this._currentRoll++] = pins;
  }

  public score(): number {
    let score: number = 0;
    let frameIndex: number = 0;

    for (let frame: number = 0; frame < 10; frame++) {
      if (this._isStrike(frameIndex)) {
        score += 10 + this._strikeBonus(frameIndex);
        frameIndex++;
      } else if (this._isSpare(frameIndex)) {
        score += 10 + this._spareBonus(frameIndex);
        frameIndex += 2;
      } else {
        score += this._sumOfBallsInFrame(frameIndex);
        frameIndex += 2;
      }
    }
    return score;
  }

  private _isStrike(frameIndex: number): boolean {
    return this._rolls[frameIndex] === 10;
  }

  private _sumOfBallsInFrame(frameIndex: number): number {
    return this._rolls[frameIndex] + this._rolls[frameIndex + 1];
  }

  private _spareBonus(frameIndex: number): number {
    return this._rolls[frameIndex + 2];
  }

  private _strikeBonus(frameIndex: number): number {
    return this._rolls[frameIndex + 1] + this._rolls[frameIndex + 2];
  }

  private _isSpare(frameIndex: number): boolean {
    return this._rolls[frameIndex] + this._rolls[frameIndex + 1] === 10;
  }
};

function rollMany(g: Game, n: number, pins: number) {
  for (let i: number = 0; i < n; i++) {
    g.roll(pins);
  }
}

function rollSpare(g: Game) {
  g.roll(5);
  g.roll(5);
}


describe('Bowling Game', () => {

  it('should exist', () => {
    let g: Game = new Game();
    expect(g).not.toBeUndefined();
  });

  describe('all gutters', () => {

    let g: Game = new Game();
    rollMany(g, 20, 0);


    it('should display a score of 0', () => {
      expect(g.score()).toEqual(0);
    });
  });

  describe('all Ones', () => {

    let g: Game = new Game();
    rollMany(g, 20, 1);

    it('should display a score of 20', () => {
      expect(g.score()).toEqual(20);
    });
  });

  describe('one spare', () => {
    let g: Game = new Game();
    rollSpare(g);
    g.roll(3);
    rollMany(g, 17, 0);

    it('should display a score of 16', () => {

      expect(g.score()).toEqual(16);
    });
  });

  describe('one strike', () => {

    let g: Game = new Game();
    g.roll(10);
    g.roll(3);
    g.roll(4);
    rollMany(g, 16, 0);
    it('should display a score of 24', () => {
      expect(g.score()).toEqual(24);
    });
  });
});
