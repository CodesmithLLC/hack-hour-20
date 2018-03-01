describe('fizzbuzz', () => {
  it('should fizzbuzz', () => {
    const ret = [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16];
    expect(fizzbuzz(16)).to.eql(Array.from(ret));
  });
});

describe('draw-stairs', () => {
  it('should draw-stairs (@todo by analyzing stdout.. check Node API..?)', () => {
    console.log('Need to access stdout in test case, somehow... @todo');
    // expect(fizzbuzz(16)).to.eql(Array.from(ret));
    expect(false).to.eql(true);
  });
});