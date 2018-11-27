import { Game } from './bowling-game';
import { Roll } from './spec-helpers';

describe('Bowling Game', () => {
  describe('Score', () => {
    let g: Game;
    let roll: Roll;

    beforeEach(() => {
      g = new Game();
      roll = new Roll(g);
    });

    it('should equal 0 for 0 pins per roll (gutter balls)', () => {
      roll.many(20, 0);
      expect(g.score()).toEqual(0);
    });

    it('should equal 20 for 1 pin per roll', () => {
      roll.many(20, 1);
      expect(g.score()).toEqual(20);
    });

    it('should equal 16 for 1 spare followed by a 3', () => {
      roll.spare();
      g.roll(3);
      roll.many(17, 0);
      expect(g.score()).toEqual(16);
    });

    it('should equal 24 for 1 strike followed by a 3 and a 4', () => {
      roll.strike();
      g.roll(3);
      g.roll(4);
      roll.many(16, 0);
      expect(g.score()).toEqual(24);
    });

    it('should equal 300 for a strike per roll (perfect game)', () => {
      roll.many(12, 10);
      expect(g.score()).toEqual(300);
    });
  });
});
