import { DiceModule } from './dice.module';

describe('DiceModule', () => {
  let diceModule: DiceModule;

  beforeEach(() => {
    diceModule = new DiceModule();
  });

  it('should create an instance', () => {
    expect(diceModule).toBeTruthy();
  });
});
