import { InputFileModule } from './input-file.module';

describe('InputFileModule', () => {
  let inputFileModule: InputFileModule;

  beforeEach(() => {
    inputFileModule = new InputFileModule();
  });

  it('should create an instance', () => {
    expect(inputFileModule).toBeTruthy();
  });
});
