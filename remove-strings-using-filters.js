// Create a function that takes an array of non-negative numbers and strings and returns a new array without the strings.
// Rules
  // Filter out all strings.
  // Return only numbers.
  // Example
    // [1, 2, "a", "b"] ➞ [1, 2]
    // [1, "a", "b", 0, 15] ➞ [1, 0, 15]
    // [1, 2, "aasf", "1", "123", 123] ➞ [1, 2, 123]
    // Notes

    function filterArray(arr) {
    // create empty array to push numbers into
        var numArr = [];
    // create for loop to filter numbers
        for ( i = 0; i < arr.length; i++){
    // create conditional to find numbers and filter out strings
          if( typeof arr[i] === "number"){
    // push numbers into empty array
            numArr.push(arr[i]);
          }
        }
    // return array of numbers
        return numArr; 
      }
      
      console.log(filterArray([1, 2, "a", "b"]));
      console.log(filterArray([1, "a", "b", 0, 15]));
      console.log(filterArray([1, 2, "aasf", "1", "123", 123]));
      