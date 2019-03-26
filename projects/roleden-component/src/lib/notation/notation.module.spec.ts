import { NotationModule } from './notation.module';

describe('NotationModule', () => {
  let notationModule: NotationModule;

  beforeEach(() => {
    notationModule = new NotationModule();
  });

  it('should create an instance', () => {
    expect(notationModule).toBeTruthy();
  });
});
