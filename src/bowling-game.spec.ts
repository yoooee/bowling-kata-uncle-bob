
describe('Bowling Game', () => {

  class Game{
    private _score: number = 0;

    public roll(pins: number) {
      this._score += pins;
    }
    public score(): number {
      return this._score;
    }
  };

  let g: Game = new Game();
  it('should exist', () => {
    expect(g).not.toBeUndefined();
  });

  describe('all gutters', () => {

    let g: Game = new Game();
    for (let i: number = 0; i < 20; i++) {
      g.roll(0);
    }

    it('should display a score of 0', () => {

      expect(g.score()).toEqual(0);
    });
  });

  describe('all Ones', () => {

    let g: Game = new Game();
    for (let i: number = 0; i < 20; i++) {
      g.roll(1);
    }

    it('should display a score of 20', () => {
      expect(g.score()).toEqual(20);
    });
  })
});
