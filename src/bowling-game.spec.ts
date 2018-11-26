
describe('Bowling Game', () => {

  class Game{
    public roll(pins: number) {}
    public score(): number {
      return 0;
    }
  };

  let g: Game = new Game();
  it('should exist', () => {
    expect(g).not.toBeUndefined();
  });

  describe('all gutters', () => {

    let g: Game = new Game();
    for (let i = 0; i < 20; i++) {
      g.roll(0);
    }

    it('should display a score of 0', () => {

      expect(g.score()).toEqual(0);
    });
  });
});
