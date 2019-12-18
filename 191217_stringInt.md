# DEC 17: stringInt

Write a function that converts an integer to its base 10 string representation. 
Do not use `toString` or similar builtin methods. Convert a number into its string representation.

1024 => "1024"

111 => "111"

---

### My first solution

```
// time: O(1), uses JS Object key stringification

const stringIntObj = (num) => {
  const obj = { [num]: true };
  return Object.keys(obj)[0];
}
```

```
const input1 = 1024;
const input2 = 39;
const input3 = 0;
const input4 = 22;
const input5 = 6;

const log = console.log;

log(stringIntObj(input1));
log(stringIntObj(input2));
log(stringIntObj(input3));
log(stringIntObj(input4));
log(stringIntObj(input5));

=>
1024
39
0
22
6
```

## Alternative Solutions

```
// time: O(n), uses recursion and utf-16 conversion

const stringIntU16 = input => {
  const utf16 = {
    "0": '\u0030',
    "1": '\u0031',
    "2": '\u0032',
    "3": '\u0033',
    "4": '\u0034',
    "5": '\u0035',
    "6": '\u0036',
    "7": '\u0037',
    "8": '\u0038',
    "9": '\u0039',
  }
  let output = "";
  const pointAtDigits = (num) => {
    if (Math.floor(num / 10) < 1) {
      output = utf16[num] + output;
      return;
    }
    output = utf16[num % 10] + output;
    return pointAtDigits(Math.floor(num / 10));
  }
  pointAtDigits(input);
  return output;
}
```

```
log(stringIntU16(input1));
log(stringIntU16(input2));
log(stringIntU16(input3));
log(stringIntU16(input4));
log(stringIntU16(input5));

=>
1024
39
0
22
6
```
