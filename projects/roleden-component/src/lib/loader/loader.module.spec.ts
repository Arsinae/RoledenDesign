import { LoaderModule } from './loader.module';

describe('LoaderModule', () => {
  let loaderModule: LoaderModule;

  beforeEach(() => {
    loaderModule = new LoaderModule();
  });

  it('should create an instance', () => {
    expect(loaderModule).toBeTruthy();
  });
});
