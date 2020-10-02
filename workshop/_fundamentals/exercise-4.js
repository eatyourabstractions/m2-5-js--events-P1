// Exercise 4
//
// 1. Write a function that accepts an array of objects and a key (string) as arguments and returns a new array with only the values of the corresponding key.
// e.g. getValues([{name: 'chris', age: 23}, {name: 'liv', age: 36}, {name: 'dave', age: 43}, 'age']) returns [23, 36, 43]

// - If the provided key is not any of the objects, return null for that value;

const getValues = (arr, key) => {
  // Insert missing solution please
  let ans = []
  for(let idx = 0; idx <= arr.length - 1; idx++){
    if(!Object.keys(arr[idx]).includes(key)){
      return undefined
    } else{
      ans.push(arr[idx][key])
    }
  }
  return ans
};


console.log(
  getValues([
    { name: "chris", age: 23, shirtSize: "X" },
    { name: "liv", age: 36, shirtSize: "S" },
    { name: "dave", age: 43, shirtSize: "XL" },
  ], 'shirtSize')
)
// 2. Do a console.log to verify your function.

// 3. Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

module.exports = getValues;
