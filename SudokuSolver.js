function sudoku(puzzle) {
  //return the solved puzzle as a 2d array of 9 x 9
  let rows = [];
  let cols = [];
  let squares = [];


  for (let i = 0; i < puzzle.length; i++) {
    rows.push(fillRows(puzzle[i]));
    cols.push(fillCols(i));
  }
  console.log('rows:');
  console.table(rows);
  console.log('');
  console.log('cols:');
  console.table(cols);
  console.log('');
  for (let i = 0; i < puzzle.length; i += 3) {
    for (let j = 0; j < puzzle.length; j += 3) {
      squares.push(fillSquares(i, j));
    }
  }
  console.log('square:');
  console.table(squares);



  function fillRows(existArr) {
    const filledArr = [];
    for (let i = 1; i <= 9; i++) {
      if (!existArr.includes(i)) {filledArr.push(i)}
    }
    return filledArr;
  }

  function fillCols(index) {
    const filledArr = [1,2,3,4,5,6,7,8,9];
    for (let i = 0; i < puzzle.length; i++) {
      if (filledArr.includes(puzzle[i][index])) {
        filledArr[puzzle[i][index] - 1] = 0;
      }
    }
    return filledArr.filter( item => item);
  }

  function fillSquares(outerIndex, innerIndex) {
    const filledArr = [1,2,3,4,5,6,7,8,9];
    for (let i = outerIndex; i < outerIndex + 3; i++) {
      for (let j = innerIndex; j < innerIndex + 3; j++) {
        if (filledArr.includes(puzzle[i][j])) {
          filledArr[puzzle[i][j] - 1] = 0;
        }
      }
    }
    return filledArr.filter( item => item);
  }
}

const puzzle = [
  [5,3,0,0,7,0,0,0,0],
  [6,0,0,1,9,5,0,0,0],
  [0,9,8,0,0,0,0,6,0],
  [8,0,0,0,6,0,0,0,3],
  [4,0,0,8,0,3,0,0,1],
  [7,0,0,0,2,0,0,0,6],
  [0,6,0,0,0,0,2,8,0],
  [0,0,0,4,1,9,0,0,5],
  [0,0,0,0,8,0,0,7,9]];



sudoku(puzzle);



const sol = [
  [5,3,4,6,7,8,9,1,2],
  [6,7,2,1,9,5,3,4,8],
  [1,9,8,3,4,2,5,6,7],
  [8,5,9,7,6,1,4,2,3],
  [4,2,6,8,5,3,7,9,1],
  [7,1,3,9,2,4,8,5,6],
  [9,6,1,5,3,7,2,8,4],
  [2,8,7,4,1,9,6,3,5],
  [3,4,5,2,8,6,1,7,9]];

function isEqualArr(arr, sol) {
  for (let i = 0; i < sol.length; i++) {
    for (let j = 0; j < sol[i].length; j++) {
      if (sol[j] !== arr[j]) return false;
    }
  }
  return true;
}
