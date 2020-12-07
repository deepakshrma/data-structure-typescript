const HeapsPermutation = <T extends any>(arr: T[] = []): T[][] => {
  const result: T[][] = [];
  const swap = (a: T[], i1: number, i2: number) => {
    [a[i2], a[i1]] = [a[i1], a[i2]];
  };
  const generate = (n: number, a: T[]) => {
    if (n === 1) {
      result.push(a.slice());
      return;
    }
    generate(n - 1, a);
    for (let i = 0; i < n - 1; i++) {
      if (n % 2 == 0) swap(a, i, n - 1);
      else swap(a, 0, n - 1);
      generate(n - 1, a);
    }
  };
  generate(arr.length, arr);
  return result;
};
const permutation = (arr: any[]) => {
  return permute([], arr);
};
const permute = (prefix: any[], suffix: any[], arr: any[] = []) => {
  if (suffix.length == 0) arr.push(prefix);
  else {
    for (let i = 0, len = suffix.length; i < len; i++) {
      permute(prefix.concat(suffix[i]), suffix.splice(i, 1), arr);
    }
  }
  return arr;
};
console.log(permutation(["A", "B", "C"]));
export default HeapsPermutation;
