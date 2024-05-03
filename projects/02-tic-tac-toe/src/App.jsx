import { Children, useState } from 'react'
import confetti from 'canvas-confetti'
import './App.css'

const TURNS = {
  X : "x",
  O : "o"
}

const Square = ({ children, isSelected, updateBoard, index}) => {
  const className = `cell ${isSelected ? 'is-selected' : ''}`
  
  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function App() {
  
  const [board, setBoard] = useState( Array(9).fill(null) )

  const [turn, setTurn] = useState(TURNS.X)

  const [winner, setWinner] = useState(null) // null es que no hay ganador y false es empate

  const checkWinner = (boardToCheck) => {
    // revisamos todas las combinaciones ganadoras
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] && 
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    // si no hay ganador
    return null
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const checkEndGame = (newBoard) => {
    // revisamos si no quedan espacios vacíos en el tablero
    return newBoard.every((square) => square !== null)
  }

  const updateBoard = (index) => {

    if (board[index] || winner ) return  // no actualizamos si hay algo en la pos

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    console.log(newTurn)

    // revisamos si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // empate
    }
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return(
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section>
        <h3>Now playing:</h3>
        <div className='turn'>
          <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>  
        </div>
      </section>

      <section className='my'>
        <button onClick={resetGame}>Reset Game</button>
      </section>

      {
        winner !== null && (
          <section className='winner'>
            <div className="box-winner">
              <h3>
                {
                  winner === false
                    ? 'Draw'
                    : 'Winner:'
                }
              </h3>

              <header className='win'>
                {winner && <Square isSelected={true}>{winner}</Square>}
              </header>

              <footer className='my'>
                <button onClick={resetGame}>New Game</button>
              </footer>
            </div>

          </section>
        )
      }
      
    </main>
  )
}

export default App
