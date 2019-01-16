import { SnackBarModule } from './snack-bar.module';

describe('SnackBarModule', () => {
  let snackBarModule: SnackBarModule;

  beforeEach(() => {
    snackBarModule = new SnackBarModule();
  });

  it('should create an instance', () => {
    expect(snackBarModule).toBeTruthy();
  });
});
