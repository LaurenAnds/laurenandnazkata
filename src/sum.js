/**
 * Given an array, return a new array containing duplicates
 * of every item in inputArray.
 * @param {string[]} arr - input array
 * @returns {string[]} output - returns a new array with input array items duplicated.
 */


function duplicate2(arr){
    const output = [];
    for(let i = 0; i < arr.length; i++){
        output.push(arr[i])
        output.push(arr[i])
    
    }
    return output;
}



export { duplicate2 };
