// This question is very important as it has been asked in many multinational companies including Nagarro.

// Use case 1:

// Input: this_is_a_variable
// output: thisIsAVariable

// Use case 2:

// Input: thisIsAVariable
// Output: this_is_a_variable

// Here is the code.


// Solution:
function convertString(str){
  let result = "";

  debugger
  if(str.indexOf("_") > -1) {

      let arr = str.split("_");
      result = arr[0];

      for(let i=1; i< arr.length; i++){
          result = result + arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }       

  } else {
      for(let i=0; i<str.length; i++){

          if(str[i] === str.charAt(i).toUpperCase()){
              result = result + "_" + str[i].toLowerCase();
          }
          else{
              result = result + str[i];
          }
      }
  }

  return result;
}

console.log(convertString("this_is_a_variable"));
console.log(convertString("thisIsAVariable"));
