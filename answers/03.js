"use strict";

/* Question 03

Implement the function as defined below.

Many programming languages have a range() functionality which will generate an array of numbers that increment from either 0 or 1 up to the number of digits requested. For example, range(10) might return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] or it might return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] depending on the implementation. Some even allow you to control the direction.

Unfortunately, JavaScript doesn't have a built-in range() function, so we want you to build one. Build out the function range() so that it takes three parameters:

1. The number of integers to generate
2. A boolean for whether to skip 0 or not (true: skip zero)
3. A boolean for whether the range should be in reverse/decreasing order or regular/increasing order (true: reverse/decreasing order)

If a non-number is passed in for the first argument, return an empty array.

Pro Tip: Remember to work incrementally. Start off just implementing the false and false scenario for the second and third parameters. In other words, focus on the zero-based, ascending range first. Work on edge cases at the very end (such as passing in a string instead of a number, as shown in the final example below.)

**Examples:**

- range(10, false, false) should return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
- range(10, true, false) should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
- range(10, true, true) should return [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
- range(10, false, true) should return [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
- range(3, true, false) should return [1, 2, 3]
- range(0, false, <anything>) should return [0]
- range(10) should do the same thing as range(10, false, false)
- range(10, true) should do the same thing as range(10, true, false)
- range("2", <anything>, <anything>) should return []
*/

const range = function (count, skipZero, descending) {
  const values = [];
  if (typeof count !== "number") return [];
  //For non-number input, output ia an empty array
  else if (count === 0 && skipZero === false) return [];
  //If the count is equal to zero, output is empty array as well
  else if (
    //Range including zero in ascending order
    count > 0 &&
    ((skipZero === false && descending === false) ||
      (skipZero === undefined && descending === undefined))
  ) {
    for (let i = 0; i < count; i++) {
      values[i] = i;
    }
    return values;
  } else if (
    //Range without zero in ascending order
    count > 0 &&
    ((skipZero === true && descending === undefined) ||
      (skipZero === true && descending === false))
  ) {
    for (let i = 1; i <= count; i++) {
      values.push(i);
    }
    return values;
  } else if (count > 0 && skipZero === true && descending === true) {
    //Range without zero in descending order
    for (let i = count; i > 0; i--) {
      values[count - i] = i;
    }
    return values;
  } else {
    //Case (false, true)
    for (let i = count; i > 0; i--) {
      values[count - i] = i - 1;
    }
    return values;
  }
};

//console.log(range(10,true));
// Don't change below:

module.exports = { range };
