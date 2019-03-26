import { InputModule } from './input.module';

describe('InputModule', () => {
  let inputModule: InputModule;

  beforeEach(() => {
    inputModule = new InputModule();
  });

  it('should create an instance', () => {
    expect(inputModule).toBeTruthy();
  });
});
