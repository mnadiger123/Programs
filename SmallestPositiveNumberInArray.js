// Write a function:
// function solution(A);
// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
// Given A = [1, 2, 3], the function should return 4.
// Given A = [−1, −3], the function should return 1.
// Write an efficient algorithm for the following assumptions:
//     • N is an integer within the range [1..100,000];
//     • each element of array A is an integer within the range [−1,000,000..1,000,000].


// Solution 1 : 
function findSmallestPositiveNumberInArray(values) {
  let result = [];

  for (let i = 0; i < values.length; ++i) {
    if (0 <= values[i]) {
      result[values[i]] = true;
    }
  }

  for (let i = 1; i <= result.length; ++i) {
    if (undefined === result[i]) {
      return i;
    }
  }

  return 1
}


// Solution 2: Only iterate over the ordered array. 
// For every value, check if the value is bigger than 0 and if the next element on the array is not equal to the current value + 1.
var firstMissingPositive = function(A) {

    for(var i=0;i<A.length-1;i++){// iterate until  penultimate element
        if(A[i]>0 && A[i+1]!=(A[i]+1)){
            return (A[i]+1);
        }
    }

    
};
