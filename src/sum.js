
function duplicate2(arr){
    const output = [];
    for(let i = 0; i < arr.length; i++){
        output.push(arr[i])
        output.push(arr[i])
    
    }
    return output;
}



export { duplicate2 };
