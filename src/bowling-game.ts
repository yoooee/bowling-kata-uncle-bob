export class Game {
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

  private _isSpare(frameIndex: number): boolean {
    return this._rolls[frameIndex] + this._rolls[frameIndex + 1] === 10;
  }

  private _isStrike(frameIndex: number): boolean {
    return this._rolls[frameIndex] === 10;
  }

  private _spareBonus(frameIndex: number): number {
    return this._rolls[frameIndex + 2];
  }

  private _strikeBonus(frameIndex: number): number {
    return this._rolls[frameIndex + 1] + this._rolls[frameIndex + 2];
  }

  private _sumOfBallsInFrame(frameIndex: number): number {
    return this._rolls[frameIndex] + this._rolls[frameIndex + 1];
  }

};
