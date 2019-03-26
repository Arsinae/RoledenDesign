import { FlippingCardModule } from './flipping-card.module';

describe('FlippingCardModule', () => {
  let flippingCardModule: FlippingCardModule;

  beforeEach(() => {
    flippingCardModule = new FlippingCardModule();
  });

  it('should create an instance', () => {
    expect(flippingCardModule).toBeTruthy();
  });
});
