import { SmallCardModule } from './small-card.module';

describe('SmallCardModule', () => {
  let smallCardModule: SmallCardModule;

  beforeEach(() => {
    smallCardModule = new SmallCardModule();
  });

  it('should create an instance', () => {
    expect(smallCardModule).toBeTruthy();
  });
});
