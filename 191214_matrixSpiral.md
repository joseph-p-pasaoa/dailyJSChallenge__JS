# DEC 14: matrixSpiral

Given an x by y matrix(array of arrays) of integers, write a function that returns the integers in a 
spiral pattern. For example, for this matrix...
```
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
```
The output should be: [1, 2, 3, 6, 9, 8, 7, 4, 5]

---

### My solution

```
const matrixSpiral = (arr) => {
  // x is horizontal
  // y is vertical
  // x shift is on reverse trip after 1st iter
  // y shift is on reverse trip on 1st iter

  let xStart = 0;
  let xEnd = arr[0].length - 1;
  let yStart = 0;
  let yEnd = arr.length - 1;

  let outputArr = [];

  for (let y = yStart; y<= yEnd; y++) {
    for (let x = xStart; x <= xEnd; x++) {

      if (x === xEnd) {
        xEnd -= 1;
        yStart += 1;
        while (y < yEnd) {
          outputArr.push(arr[y][x]);
          y += 1;
        }
        yEnd -= 1;
        while (x > xStart) {
          outputArr.push(arr[y][x]);
          x -= 1;
        }
        xStart += 1;
        while (y > yStart) {
          outputArr.push(arr[y][x]);
          y -= 1;
        }
      }
      outputArr.push(arr[y][x]);
          
    }
  }
  return outputArr;
}
```
```
const input1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
const input2 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
];
console.log(matrixSpiral(input1));
console.log(matrixSpiral(input2));

// =>
[
  1, 2, 3, 6, 9,
  8, 7, 4, 5
]
[
   1,  2,  3,  4,  5, 10, 15, 20,
  25, 24, 23, 22, 21, 16, 11,  6,
   7,  8,  9, 14, 19, 18, 17, 12,
  13
]
```
