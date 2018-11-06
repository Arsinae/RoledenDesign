import { MusicPlayerModule } from './music-player.module';

describe('MusicPlayerModule', () => {
  let musicPlayerModule: MusicPlayerModule;

  beforeEach(() => {
    musicPlayerModule = new MusicPlayerModule();
  });

  it('should create an instance', () => {
    expect(musicPlayerModule).toBeTruthy();
  });
});
