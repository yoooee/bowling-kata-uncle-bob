class Game{
  private _score: number = 0;
  private _rolls: Array<number> = [];
  private _currentRoll: number = 0;

  public roll(pins: number) {
    this._score += pins;
    this._rolls[this._currentRoll++] = pins;
  }
  public score(): number {
    let score: number = 0;
    for (let i: number = 0; i < this._rolls.length; i++) {
     score += this._rolls[i];
    }
    return this._score;
  }
};

function rollMany(g: Game, n: number, pins: number) {
  for (let i: number = 0; i < n; i++) {
    g.roll(pins);
  }
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

  //describe('one spare', () => {
    //let g: Game = new Game();
    //g.roll(5);
    //g.roll(5);
    //g.roll(3);
    //rollMany(g, 17, 0);

    //it('should display a score of 16', () => {

      //expect(g.score()).toEqual(16);
    //});
  //});
});
