function magicMatrix (input) {

    let matrix = input.slice(0);
    console.log(matrix[0].length);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let firstRowSum = matrix[0]
    .reduce((acc,el) => {
        return acc + el;
    },0);
    let firstColSum = matrix
    .reduce((acc,el) => {
        return acc + el[0];
    },0);

    let diffRowsCount = matrix.filter( row => {
        let curRowSum = row.reduce(reducer);
        return curRowSum != firstRowSum;
    }).length;
    if(diffRowsCount != 0) {
        return false;
    }

    for (  let col = 0; col < matrix[0].length; col++ ) {
        let curColSum = 0;
        for ( let row = 0; row < matrix.length; row++ ) {
            curColSum += matrix[row][col];
            //console.log (`Row:${row}, Col:${col}`);
        }
        if( curColSum != firstColSum ) {
            return false;
        }
    }
    return true;
}

// magicMatrix([[4, 5, 6, 1, 1, 1],
//     [6, 5, 4, 1, 1, 1],
//     [5, 5, 5, 1, 1, 1]]
//    );


   function spiralMatrix(m, n) {
    
    let val = 1;
    let minCol = 0;
    let maxCol = m-1;
    let minRow = 0;
    let maxRow = n-1;
  let spiral = [];

  for (let row = 0; row < n; row++) {
      spiral[row] = [];
      for (let col = 0; col < m; col++) {
          spiral[row][col] = 0;
      }
  }
    while (val <= m*n+1) {
        for (let i = minCol; i <= maxCol; i++) {
            spiral[minRow][i] = val;
            val++;
        }
        for (let i = minRow+1; i <= maxRow; i++) {
            spiral[i][maxCol] = val;
            val++;
        }
        for (let i = maxCol-1; i >= minCol; i--) {
            spiral[maxRow][i] = val;
            val++;
        }
        for (let i = maxRow-1; i >= minRow+1; i--) {
            spiral[i][minCol] = val;
            val++;
        }
        minCol++;
        minRow++;
        maxCol--;
        maxRow--;
    }

    spiral.forEach(row => {
        console.log(row.join(' '));
    })
   }

//    spiralMatrix(10,5);



// diagonalAttack(['5 3 12 3 1',
// '11 4 23 2 5',
// '101 12 3 21 10',
// '1 4 5 2 2',
// '5 22 33 11 1']
// );

function diagonalAttack(input) {
    let matrix = input.map( row => {
        return  row.split(' ').map(el=> +el);
    })
    let mainDiagSum = 0;
    let secDiagSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if( i === j ) {
                mainDiagSum += matrix[i][j];
            }
            if( j === matrix[i].length -1 - i ) {
                secDiagSum += matrix[i][j];
            }
        }
    }

    if(mainDiagSum === secDiagSum) {
        matrix.forEach( (row,i) => {
            let curRow = row.map((col,j) => {
                if((i===j) || (j === row.length -1 - i)) {
                    return col;
                } else {
                    return mainDiagSum;
                }
            });
            console.log(curRow.join(' '));
        })
    } else {
        matrix.forEach(row => {
            console.log(row.join(' '));
        })
    }
}


orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);
orbit([3, 3, 2, 2]);

function orbit(inputParams) {
    let rows = inputParams[0];
    let cols = inputParams[1];
    let x = inputParams[2];
    let y = inputParams[3];
    let matrix = [];
    for (let row = 0; row < rows; row++) {
        matrix[row] = [];
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = 0;
        }
    }
    
    matrix.forEach((row,i) => {
        let rezRow = row.map( (col,j) => {
            return Math.max(Math.abs(i-x),Math.abs(j-y))+1;
        });
        console.log(rezRow.join(' '));
    });
    
}