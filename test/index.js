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

describe('mode-mean', () => {
  it('should return true vacuously', () => expect(modemean([])).to.eql(true));
  it('should return true with one element', () => expect(modemean([0])).to.eql(true));
  it('should return true with exactly two elements s.t. they are distinct', () => expect(modemean([1, 2])).to.eql(true));
  it('should return true with exactly two elements s.t. they are NOT distinct', () => expect(modemean([1, 2])).to.eql(true));
  it('should return false with exactly three elements s.t. they are distinct', () => expect(modemean([1, 2])).to.eql(true));
});

describe('kthToLastNode', () => {
  const a = new Node('A');
  const b = new Node('B');
  const c = new Node('C');
  const d = new Node('D');
  const e = new Node('E');
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  it('should correctly return the value of the second-to-last node', () => expect(kthToLastNode(2, a)).to.eql('D'));
  it('should correctly return the value of the third-to-last node', () => expect(kthToLastNode(3, a)).to.eql('C'));
  it('should correctly return the value of the fourth-to-last node', () => expect(kthToLastNode(4, a)).to.eql('B'));
  it('should correctly return the value of the last node', () => expect(kthToLastNode(1, a)).to.eql('E'));
  it('should correctly return the value of the fifth-to-last (first) node', () => expect(kthToLastNode(5, a)).to.eql('A'));
  it('should return null if k > length of linked list', () => expect(kthToLastNode(6, a)).to.eql(null));
});

describe('pow (test-cases not working with mocha etc, but this function works in the browser Developer Console) @todo', () => {
  it('should take a positive power correctly', () => expect(pow(2^3)).to.eql(8));
  it('should take a negative power correctly', () => expect(pow(2^-3)).to.eql(-8));
  it('should take a 0 power correctly', () => expect(pow(0^2)).to.eql(0));
  it('should take a negative base correctly', () => expect(pow((-2)^3)).to.eql(-8));
  it('should take a positive base correctly', () => expect(pow(2^3)).to.eql(8));
});