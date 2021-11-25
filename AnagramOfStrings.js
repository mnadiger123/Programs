// An algorithm to check if two string are anagram of each other.

// Input:
// 'prashant'
// 'tnahsarp'

// 'learnersbucket'
// 'tekcubsrenraes'

// Output:
// true
// false

// We will use different methods to solve this anagram strings problem.

// Using sorting O(nlogn).
// By counting the letters of strings O(n).

// Using sorting.

// Implementation:
// We will sort both strings in ascending order and check if they are equal.
// If they are equal then return true else return false.

// Solution:
let anagramStrings = (str1, str2) => {

    //split the string to character array
    //sort the character array
    //then join the sorted array to form the string
    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');
    
    //return true if equal else return false
    return sortedStr1 === sortedStr2;
}

// Input:
// console.log(anagramStrings('prashant', 'tnahsarp'));
// console.log(anagramStrings('learnersbucket', 'tekcubsrenraes'));

// Output:
// true
// false
// *************************
// We have used string split() method to create the characters array.
// Then using sort() method we have sorted the character array.
// After that with join() we have joined the characters array to create the string.

// Time complexity: O(nlogn).
// Space complexity: O(n).


// By counting the letters of the string.
// Implementation
// If both the strings are not equal then return false.
// We will keep track of the characters in both the string and count their occurrences.
// If all the characters count is equal then return true else return false.


// Better Solution:

let anagramStrings = (str1, str2) => {
    //if both the strings are not equal then return false
    if(str1.length !== str2.length){
      return false;
    }

    //create two objects to keep track
    let track = {};
    let track2 = {};
    
    //count the character occurrences of first string
    for(let i = 0; i < str1.length; i++){
        if(!track[str1[i]]){
           track[str1[i]] = 1;
        }else{
           track[str1[i]]++;
        }
    }

    //count the character occurrences of second string
    for(let i = 0; i < str2.length; i++){
        if(!track2[str2[i]]){
           track2[str2[i]] = 1;
        }else{
           track2[str2[i]]++;
        }
    }
    
    //check if the character occurrences in both the string are not equal then return false;
    for(let i = 0; i < str1.length; i++){
       if(track1[str1[i]] !== track2[str2[i]]){
          return false;
       } 
    }

    return true;

}

// Time complexity: O(n).
// Space complexity: O(n).

// Time and Space complexity
// We are counting the character occurrences of both the strings which will take O(n + n), Then check if count is equal or not in O(n), so Time complexity is O(n + n + n) = O(n).
// We are keeping track of characters count, so Space complexity is O(n).
