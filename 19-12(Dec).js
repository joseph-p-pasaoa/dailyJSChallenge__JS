

/* DEC 9
A subarray of an array is a consecutive sequence of zero or more values taken out of that array.
For example, the array [1, 3, 7] has seven subarrays: [ ], [1], [3], [7], [1, 3], [3, 7]  and [1, 3, 7]
Notice that [1, 7] is not a subarray of [1, 3, 7], because even though the values 1 and 7 appear 
in the array, they're not consecutive in the array. Similarly, the array [7, 3] isn't a subarray of 
the original array, because these values are in the wrong order.
The sum of an array is the sum of all the values in that array. 
Your task is to write a function that takes as input an array and outputs the sum of all of its subarrays.

For example, given [1, 3, 7], you'd output 36, because:  
    [ ] + [1] + [3] + [7] + [1, 3] + [3, 7] + [1, 3, 7] = 0 + 1 + 3 + 7 + 4 + 10 + 11 = 36
*/

const subArrSum = (arr) => {
  let subArrays = [[]];
  for (let elems = 1; elems <= arr.length; elems++) {
    let tempArray = [];
    for (let start = 0; start < arr.length - elems; start++) {
      for (let end = start; end <= end + elems - 1; end++) {
        tempArray.push(arr[end]);
      }
      console.log(tempArray);
      subArrays.push(tempArray);
    }
  }

}

subArrSum([1, 3, 7]);