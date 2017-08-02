import { PlatziAngularPage } from './app.po';

describe('platzi-angular App', () => {
  let page: PlatziAngularPage;

  beforeEach(() => {
    page = new PlatziAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
