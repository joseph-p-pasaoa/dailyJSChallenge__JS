# Daily Javascript Challenges

Repository of all my work on our daily warmup challenges.

---

## [JAN 4: howManyElements](./200104_howManyElements.md)

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

## [DEC 17: stringInt](./191217_stringInt.md)

Write a function that converts an integer to its base 10 string representation. 
Do not use `toString` or similar builtin methods. Convert a number into its string representation.

1024 => "1024"

111 => "111"

---

## [DEC 16: recursiveLog](./191216_recursiveLog.md)

Write a recursive function. Make it stop at some point. 

Bonus: Write a recursive function that console.log all the elements of an array.

---

## [DEC 14: matrixSpiral](./191214_matrixSpiral.md)

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

## [DEC 11: howManyHellos](./191211_howManyHellos.md)

Given an array of letters, how many times can we spell the word 'HELLO' if each letter in the array 
can be used only once? Eg, for this array we can spell 'hello' only once:
```
['H', 'H', 'I', 'E', 'E', 'E', 'L', 'L', 'O', 'O']
```

---

## [DEC 10: tripletsForZero](./191210_tripletsForZero.md)

Given an array of integers, write a function that finds all the unique triplets in an array that add up to zero.
A triplet is any 3 numbers in the array. Duplicates not allowed.
```
Input : [0, -1, 2, -3, 1]
Output : [[0, -1, 1], [2, -3, 1]]

Input [1, -2, 1, 0, 5]
Output : [[1, -2, 1]]
```

---

## [DEC 9: sumOfSubArrays](./191209_sumOfSubArrays.md)

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
