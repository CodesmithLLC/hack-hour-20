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

describe('reverse-in-place', () => {
  it('non-collection: null', () => expect(reverseInPlace(null)).to.eql(null));
  it('non-mutable collection: string literal', () => expect(reverseInPlace('abc')).to.eql('abc'));
  it('empty array', () => expect(reverseInPlace([])).to.eql([]));
  it('one element', () => expect(reverseInPlace([1])).to.eql([1]));
  it('two elements', () => expect(reverseInPlace([1, 2])).to.eql([2, 1]));
  it('three elements', () => expect(reverseInPlace([1, 2, 3])).to.eql([3, 2, 1]));
  it('four elements', () => expect(reverseInPlace([1, 2, 3, 4])).to.eql([4, 3, 2, 1]));
  it('five elements', () => expect(reverseInPlace([1, 2, 3, 4, 5])).to.eql([5, 4, 3, 2, 1]));
});

describe('balanced-parens', () => {
  it('non-collection: null', () => expect(balancedParens(null)).to.eql(true));
  it('empty string', () => expect(balancedParens('')).to.eql(true));
  it('one element', () => expect(balancedParens('(')).to.eql(false));
  it('one element', () => expect(balancedParens('a')).to.eql(true));
  it('two elements', () => expect(balancedParens('abcd')).to.eql(true));
  it('three elements', () => expect(balancedParens('(){}')).to.eql(true));
  it('four elements', () => expect(balancedParens('(())')).to.eql(true));
  it('five elements', () => expect(balancedParens('())')).to.eql(false));

  it('pass their test cases', () => expect(balancedParens('(')).to.eql(false)); // false
  it('pass their test cases', () => expect(balancedParens('()')).to.eql(true)); // true
  it('pass their test cases', () => expect(balancedParens(')(')).to.eql(false)); // false
  it('pass their test cases', () => expect(balancedParens('(())')).to.eql(true)); // true
  it('pass their test cases', () => expect(balancedParens('[](){}')).to.eql(true)); // true
  it('pass their test cases', () => expect(balancedParens('[({})]')).to.eql(true)); // true
  it('pass their test cases', () => expect(balancedParens('[(]{)}')).to.eql(false)); // false
  it('pass their test cases', () => expect(balancedParens(' var wow  = { yo: thisIsAwesome() }')).to.eql(true)); // true
  it('pass their test cases', () => expect(balancedParens(' var hubble = function() { telescopes.awesome();')).to.eql(false)); // false
});

describe('subset-sum', () => {
  it('pass their test cases', () => expect(subsetSum([3, 7, 4, 2], 5)).to.eql(true)); // - > true, 3 + 2 = 5
  it('pass their test cases', () => expect(subsetSum([3, 34, 4, 12, 5, 12], 32)).to.eql(true)); // -> true, 3 + 12 + 5 + 12 = 32
  it('pass their test cases', () => expect(subsetSum([8, 2, 4, 12], 13)).to.eql(false)); // -> false
  it('pass their test cases', () => expect(subsetSum([8, -2, 1, -3], 6)).to.eql(true)); // -> true, 8 + 1 + (-3) = 6
});

describe('binary-to-dec', () => {
  it('pass their test cases', () => expect(binToDec('0')).to.eql(0)); //   -> 0
  it('pass their test cases', () => expect(binToDec('11')).to.eql(3)); //  -> 3
  it('pass their test cases', () => expect(binToDec('100')).to.eql(4)); // -> 4
  it('pass their test cases', () => expect(binToDec('101')).to.eql(5)); // -> 5
  it('pass their test cases', () => expect(binToDec('0101')).to.eql(5)); // -> 5
});

describe('dec-to-bin', () => {
  it('pass their test cases', () => expect(decToBin('0')).to.eql('0')); //   -> 0
  it('pass their test cases', () => expect(decToBin('3')).to.eql('11')); //  -> 3
  it('pass their test cases', () => expect(decToBin('4')).to.eql('100')); // -> 4
  it('pass their test cases', () => expect(decToBin('5')).to.eql('101')); // -> 5
});