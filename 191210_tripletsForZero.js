/* DEC 10
Given an array of integers, write a function that finds all the unique triplets in an array that add up to zero.
A triplet is any 3 numbers in the array. Duplicates not allowed.

Input : [0, -1, 2, -3, 1]
Output : [[0, -1, 1], [2, -3, 1]]

Input [1, -2, 1, 0, 5]
Output : [[1, -2, 1]]
*/


const tripletsForZero = (arr) => {
  const makeKey = (a, b, c) => {
    const sorted = [a];
    b < a
      ? sorted.unshift(b)
      : sorted.push(b);
    if (c < sorted[0]) {
      sorted.unshift(c);
    } else if (c < sorted[1]) {
      sorted.splice(1, 0, c);
    } else {
      sorted.push(c);
    }
    let strKey = sorted.reduce((acc, curr) => acc + curr.toString());
    return strKey;
  }

  const idMap = {};
  let output = [];
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = i + 2; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === 0) {
          const tripletId = makeKey(arr[i], arr[j], arr[k]);
          if (!idMap[tripletId]) {
            output.push([arr[i], arr[j], arr[k]]);
            idMap[tripletId] = true;
          }
        }
      }
    }
  }
  return output;
}


const input1 = [0, -1, 2, -3, 1];
const input2 = [1, -2, 1, 0, 5];
const input3 = [4, -2, -2, -3, -2, -2, 0, -1, -4, -1, -1];
console.log(tripletsForZero(input1));
console.log(tripletsForZero(input2));
console.log(tripletsForZero(input3));
