# DEC 11: howManyHellos

Given an array of letters, how many times can we spell the word 'HELLO' if each letter in the array 
can be used only once? Eg, for this array we can spell 'hello' only once:
```
['H', 'H', 'I', 'E', 'E', 'E', 'L', 'L', 'O', 'O']
```

---

### My first solution

```
// time: O(n)

const howManyHellos = (arr) => {
  const counter = {
    h: true,
    e: true,
    l: true,
    o: true
  }
  for (let el of arr) {
    if (counter[el.toLowerCase()]) {
      counter[el.toLowerCase()] === true
        ? counter[el.toLowerCase()] = 1
        : counter[el.toLowerCase()] += 1;
    }
  }
  counter['l'] = Math.floor(counter['l'] / 2);
  let lowestFreq = Infinity;
  for (let key in counter) {
    if (counter[key] < lowestFreq) {
      lowestFreq = counter[key];
    }
  }
  return lowestFreq;
}
```

```
const input1 = ['H', 'H', 'I', 'E', 'E', 'E', 'L', 'L', 'O', 'O', 'L', 'L'];
const input2 = ['a', 'o', 'l', 'h', 'h', 'l', 'e', 'L', 'H', 'l', 'g', 'e', 'L', 'l', 'O', 'o', 'l', 'e', 'e'];
console.log(howManyHellos(input1));
console.log(howManyHellos(input2));

=>
2
3
```

## Alternative solutions

```
const howManyHellos = (arr) => {

}
```