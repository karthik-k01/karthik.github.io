let grids = document.getElementsByClassName("col")
let currentTurnText = document.getElementById("currentTurnText")
let currentTurn = 1
let gameOver = false
let count = 0

const playerTicker = {
    1: 'X',
    2: 'O'
}
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


const singleMove = (index) => {
    if (!gameOver && !grids[index].innerText) {
        grids[index].innerText = currentTurn === 1 ? playerTicker[1] : playerTicker[2]
        let winningPlayer = checkWinningStatus()
        if (winningPlayer != 'No Winner') {
            gameOver = true
            currentTurnText.innerText = `Player ${winningPlayer} won!`
            currentTurnText.style.backgroundColor = '#90EE90'
            return
        }
        
        currentTurn = currentTurn === 1 ? 2 : 1
        count++
        currentTurnText.innerText = `Player ${currentTurn}'s turn`
       
        if (winningPlayer == 'No Winner' && count == 9) {
            currentTurnText.innerText = "Match Drawn"
            currentTurnText.style.backgroundColor = "#808080"
            return
        }
        
    }

}

const checkWinningStatus = () => {
    for (let i = 0; i < winningCombinations.length; i++){
        combination = winningCombinations[i]
        let value = grids[combination[0]].innerText
        if (combination.every(index => grids[index].innerText && grids[index].innerText === value)) {
            addBorderStyle(combination)
            return value === 'X' ? 1 : 2
        }
    }
    return 'No Winner'
}


const addBorderStyle = (indexArray) => {
    indexArray.forEach(index => grids[index].style.cssText = 'background-color: rgba(144,238,144,1)')
}




