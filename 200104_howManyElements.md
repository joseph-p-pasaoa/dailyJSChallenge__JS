# JAN 4: howManyElements

Given an array of arrays with an unknown number of nested levels, count the total number of elements.
Example for:
```
arr = [1, [2, 3], [[["hello"], [5, 6], 7, 8], [9]]]
=> 9 because there are 8 numbers and 1 string
```
The array contents might be of any type

Hints:
You will need to tell apart arrays from strings, numbers and other data types.
You can achieve this recursive or iteratively. The iterative approach will need the help of a stack

---

[:: my code file](./2001104_howManyElements.js)

---


### First Solution with Recursive Slicing
```
// time: O(n)

const howManyElements = (arr) => {
  if (arr.length < 1) {
    return 0;
  }
  if (arr.length === 1) {
    if (!Array.isArray(arr[0])) {
      return 1;
    }
    return howManyElements(arr[0]);
  }
  if (!Array.isArray(arr[0])) {
    return 1 + howManyElements(arr.slice(1));
  }
  return howManyElements(arr[0]) + howManyElements(arr.slice(1));
}
```

```
const input1 = [1, [2, 3], [[["hello"], [5, 6], 7, 8], [9]]];
const input2 = [];
const input3 = [["uno"], ["dos", "tres"], "quatro", "cinco", { 6: false }];

console.log(howManyElements(input1));
console.log(howManyElements(input2));
console.log(howManyElements(input3));

=>
9
0
6
```

## Alternative solutions

```
const howManyElementsIterative = (arr) => {

}
```
