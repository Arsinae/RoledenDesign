import { InputNumberModule } from './input-number.module';

describe('InputNumberModule', () => {
  let inputNumberModule: InputNumberModule;

  beforeEach(() => {
    inputNumberModule = new InputNumberModule();
  });

  it('should create an instance', () => {
    expect(inputNumberModule).toBeTruthy();
  });
});
