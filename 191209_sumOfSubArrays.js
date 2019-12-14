/* DEC 9

A subarray of an array is a consecutive sequence of zero or more values taken out of that array.
For example, the array [1, 3, 7] has seven subarrays: [ ], [1], [3], [7], [1, 3], [3, 7]  and [1, 3, 7]
Notice that [1, 7] is not a subarray of [1, 3, 7], because even though the values 1 and 7 appear 
in the array, they're not consecutive in the array. Similarly, the array [7, 3] isn't a subarray 
of the original array, because these values are in the wrong order.

The sum of an array is the sum of all the values in that array. Your task is to write a function that takes 
as input an array and outputs the sum of all of its subarrays.

For example, given [1, 3, 7], you'd output 36, because:  

[] + [1] + [3] + [7] + [1, 3] + [3, 7] + [1, 3, 7] = 0 + 1 + 3 + 7 + 4 + 10 + 11 = 36
*/


const sumOfSubArrays = (arr) => {
  let sum = 0;
  for (let howBig = 1; howBig <= arr.length; howBig++) {
    for (let start = 0; start <= arr.length - howBig; start++) {
      for (let pointer = start; pointer < start + howBig; pointer++) {
        sum += arr[pointer];
      }
    } 
  }
  return sum;
}


/* VERSION THAT ALSO OUTPUTS ARRAY OF SUBARRAYS
const sumOfSubArrays = (arr) => {
  const finalArr = [[]];
  let sum = 0;
  for (let howBig = 1; howBig <= arr.length; howBig++) {
    for (let start = 0; start <= arr.length - howBig; start++) {
      const currSubArr = [];
      for (let pointer = start; pointer < start + howBig; pointer++) {
        currSubArr.push(arr[pointer]);
        sum += arr[pointer];
      }
      finalArr.push(currSubArr);
    } 
  }
  return { sum, finalArr };
}
*/


const input1 = [1, 3, 7];
const input2 = [-3, -1, 0, 3, 1, 10];
console.log(sumOfSubArrays(input1));
console.log(sumOfSubArrays(input2));
