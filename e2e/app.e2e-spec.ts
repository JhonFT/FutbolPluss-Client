import { FutbolPlussPage } from './app.po';

describe('futbol-pluss App', () => {
  let page: FutbolPlussPage;

  beforeEach(() => {
    page = new FutbolPlussPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
