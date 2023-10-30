/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = new Map()    // map of sets
    let cols = new Map()    // map of sets
    for (let i = 0; i < board.length; i++){     // ROWS
        for (let j = 0; j < board.length; j++){ // COLS
            if (board[i][j] !== '.'){
                if (rows.has(i)){
                    if (rows.get(i).has(board[i][j])){
                        return false
                    }
                    else {
                        rows.get(i).add(board[i][j])
                    }
                }
                if (cols.has(j)){
                    if (cols.get(j).has(board[i][j])){
                        return false
                    }
                    else {
                        cols.get(j).add(board[i][j])
                    }
                }
            }
        }
        while(board){
            let square = [...board[0].splice(0, 3), ...board[1].splice(0, 3), ...board[1].splice(0, 3)]
            console.log(square)

        }
    }
};


let b1 =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]] // Should return true



let b2 =
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]] // Should return false

console.log(isValidSudoku(b1))
