import { TextEditorModule } from './text-editor.module';

describe('TextEditorModule', () => {
  let textEditorModule: TextEditorModule;

  beforeEach(() => {
    textEditorModule = new TextEditorModule();
  });

  it('should create an instance', () => {
    expect(textEditorModule).toBeTruthy();
  });
});
