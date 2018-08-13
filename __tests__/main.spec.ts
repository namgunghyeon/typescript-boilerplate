import { main } from '../src/main';

describe('main function', () => {
  const name: string = 'main';

  it('main return value `12345`', () => {
    const returnName: string = main(name);
    expect(returnName).toBe('12345');

  });

});
