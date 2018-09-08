import { ExplanationModule } from './explanation.module';

describe('ExplanationModule', () => {
  let explanationModule: ExplanationModule;

  beforeEach(() => {
    explanationModule = new ExplanationModule();
  });

  it('should create an instance', () => {
    expect(explanationModule).toBeTruthy();
  });
});
