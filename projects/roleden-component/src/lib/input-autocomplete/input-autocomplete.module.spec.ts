import { InputAutocompleteModule } from './input-autocomplete.module';

describe('InputAutocompleteModule', () => {
  let inputAutocompleteModule: InputAutocompleteModule;

  beforeEach(() => {
    inputAutocompleteModule = new InputAutocompleteModule();
  });

  it('should create an instance', () => {
    expect(inputAutocompleteModule).toBeTruthy();
  });
});
