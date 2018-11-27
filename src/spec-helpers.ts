import { Game  } from './bowling-game';

export class Roll {
  constructor(private _g: Game) {}

  many(n: number, pins: number) {
    for (let i: number = 0; i < n; i++) {
      this._g.roll(pins);
    }
  }

  spare() {
    this._g.roll(5);
    this._g.roll(5);
  }

  strike() {
    this._g.roll(10);
  }
}
