class Game{
  private _score: number = 0;

  public roll(pins: number) {
    this._score += pins;
  }
  public score(): number {
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
  })
});
