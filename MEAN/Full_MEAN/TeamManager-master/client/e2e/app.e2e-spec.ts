import { CASINOPage } from './app.po';

describe('casino App', () => {
  let page: CASINOPage;

  beforeEach(() => {
    page = new CASINOPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
