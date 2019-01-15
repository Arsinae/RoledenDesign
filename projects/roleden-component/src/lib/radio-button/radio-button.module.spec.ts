import { RadioButtonModule } from './radio-button.module';

describe('RadioButtonModule', () => {
  let radioButtonModule: RadioButtonModule;

  beforeEach(() => {
    radioButtonModule = new RadioButtonModule();
  });

  it('should create an instance', () => {
    expect(radioButtonModule).toBeTruthy();
  });
});
