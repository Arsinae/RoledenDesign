import { CheckBoxModule } from './check-box.module';

describe('CheckBoxModule', () => {
  let checkBoxModule: CheckBoxModule;

  beforeEach(() => {
    checkBoxModule = new CheckBoxModule();
  });

  it('should create an instance', () => {
    expect(checkBoxModule).toBeTruthy();
  });
});
