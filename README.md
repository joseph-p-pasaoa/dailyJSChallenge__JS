# Daily Javascript Challenges

Repository of all my work on our daily warmup challenges.

---

## DEC 9: sumOfSubArrays

A subarray of an array is a consecutive sequence of zero or more values taken out of that array.

For example, the array [1, 3, 7] has seven subarrays: [ ], [1], [3], [7], [1, 3], [3, 7]  and [1, 3, 7].

Notice that [1, 7] is not a subarray of [1, 3, 7], because even though the values 1 and 7 appear 
in the array, they're not consecutive in the array. Similarly, the array [7, 3] isn't a subarray 
of the original array, because these values are in the wrong order.

The sum of an array is the sum of all the values in that array. Your task is to write a function that takes 
as input an array and outputs the sum of all of its subarrays.

For example, given [1, 3, 7], you'd output 36, because:  
[] + [1] + [3] + [7] + [1, 3] + [3, 7] + [1, 3, 7] = 0 + 1 + 3 + 7 + 4 + 10 + 11 = 36

---

## DEC 10: tripletsForZero

Given an array of integers, write a function that finds all the unique triplets in an array that add up to zero.
A triplet is any 3 numbers in the array. Duplicates not allowed.
```
Input : [0, -1, 2, -3, 1]
Output : [[0, -1, 1], [2, -3, 1]]

Input [1, -2, 1, 0, 5]
Output : [[1, -2, 1]]
```

---

## DEC 11: howManyHellos

Given an array of letters, how many times can we spell the word 'HELLO' if each letter in the array 
can be used only once? Eg, for this array we can spell 'hello' only once:
```
['H', 'H', 'I', 'E', 'E', 'E', 'L', 'L', 'O', 'O']
```

---

## DEC 14: matrixSpiral

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
