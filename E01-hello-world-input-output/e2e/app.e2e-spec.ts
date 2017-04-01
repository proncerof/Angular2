import { E01HelloWorldInputOutputPage } from './app.po';

describe('e01-hello-world-input-output App', () => {
  let page: E01HelloWorldInputOutputPage;

  beforeEach(() => {
    page = new E01HelloWorldInputOutputPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
