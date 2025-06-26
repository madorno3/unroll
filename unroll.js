
const matrix = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"]
]

function unroll(matrix){

    let left = 0;
    let top = 0;
    let right = matrix[0].length-1;
    let bottom = matrix.length-1;
    let size = matrix.length * matrix[0].length;
    let nums = [];

    while(nums.length < size){
        for(let i = left; i <= right && nums.length < size; i++ ){
            nums.push(matrix[top][i])
        }
        top++;

        for(let i = top; i <= bottom && nums.length < size; i++){
           nums.push(matrix[i][right]) 
        }
        right--;

        for(let i = right; i >= left && nums.length < size; i--){
            nums.push(matrix[bottom][i])
        }
        bottom--;
        
        for(let i = bottom; i>= top && nums.length < size; i--){
            nums.push(matrix[i][left]);
        }
        left++
    }
    console.log(nums);
    return nums;


}

unroll(matrix);

// function me(squareArray){
    
//     const firstRow = squareArray[0];
//     const firstSlice = firstRow.slice(0,-1);
//     console.log(firstSlice);
//     const lastElements = squareArray.map(squareArray => {
//         return squareArray[squareArray.length - 1]; 
//     });
//     console.log(lastElements);
//     const lastRow = squareArray[squareArray.length - 1];
//     const lastRowSlice = lastRow.slice(0, -1);
//     const lastRowReverse = lastRowSlice.reverse();
//     console.log(lastRowReverse);
//     const middleRow = squareArray[1].slice(0,-1);
//     console.log(middleRow);
//     const final = firstSlice.concat(lastElements, lastRowReverse, middleRow);
//     console.log(final);
//     return final;

// }




