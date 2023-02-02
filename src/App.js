
import './App.css';
import { useState } from 'react'
function App() {

  const [board, setBoard] = useState(Array(9).fill(null))
  const [currentSimbol, setcurrentSimbol] = useState("X");
  const [winner, setWinner] = useState("")

  const handleClick = (index) => {
    
    if(board[index] === null) {
      board[index] = currentSimbol
    }
    
    
    setcurrentSimbol(currentSimbol === "X" ? "O" : "X")
    
    
      const winnerCombination = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [2,5,8],
        [1,4,7]
      ]
      for (const comb of winnerCombination) {
        
        if(board[comb[0]] === board[comb[1]] && board[comb[1]] === board[comb[2]] && board[comb[0]] !== null) {
          setWinner(board[comb[0]]) 
        } 
      }
     
      if(winner === "X" || winner === "O") {
        alert(`Winner is ${winner} please refresh page to play again`)
      }
    
  }

 
  

  return (
    
      <div className='board'>
        {board.map((e, index)  => {
          
           return (
            <div className = "playBorder"
            onClick={() => handleClick(index)}>
            {e}
          </div>
          )
        })}
        <div className='winner'>
        {board.every(e => e !== null) ? <h1>It is Draw</h1> : <h1>Winner is: "{winner}"</h1>}
        </div>
       
        </div>
  
  );
}

export default App;
