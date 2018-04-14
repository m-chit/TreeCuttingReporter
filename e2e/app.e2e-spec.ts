import { TreesPage } from './app.po';

describe('trees App', () => {
  let page: TreesPage;

  beforeEach(() => {
    page = new TreesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
