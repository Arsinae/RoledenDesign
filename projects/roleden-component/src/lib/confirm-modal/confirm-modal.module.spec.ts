import { ConfirmModalModule } from './confirm-modal.module';

describe('ConfirmModalModule', () => {
  let confirmModalModule: ConfirmModalModule;

  beforeEach(() => {
    confirmModalModule = new ConfirmModalModule();
  });

  it('should create an instance', () => {
    expect(confirmModalModule).toBeTruthy();
  });
});
