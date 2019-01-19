import { CarouselModule } from './carousel.module';

describe('CarouselModule', () => {
  let carouselModule: CarouselModule;

  beforeEach(() => {
    carouselModule = new CarouselModule();
  });

  it('should create an instance', () => {
    expect(carouselModule).toBeTruthy();
  });
});
