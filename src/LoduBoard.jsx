import React from 'react'
import { useState } from 'react'

const LoduBoard = () => {
    let [moves,setmoves] = useState({blue : 0, red : 0, yellow : 0, green : 0});

    let bluecount = () =>{
        moves.blue += 1;
        setmoves({...moves});
    }
    let yellowcount = () =>{
        moves.yellow += 1;
        setmoves({...moves});
    }
    let greencount = () =>{
        moves.green += 1;
        setmoves({...moves});
    }
    let redcount = () =>{
        moves.red += 1;
        setmoves({...moves});
    }
  return (
    <div>
      <p>Game Begins</p>
      <div className='board'>
        <p>Blue Movies ={moves.blue}</p>
        <button onClick={bluecount} style={{backgroundColor:"blue"}}>+1</button>
        <p>yellow Movies ={moves.yellow}</p>
        <button onClick={yellowcount} style={{backgroundColor : "yellow"}}>+1</button>
        <p>Green Movies ={moves.green}</p>
        <button onClick={greencount} style={{backgroundColor : "green"}}>+1</button>
        <p>Red Movies ={moves.red}</p>
        <button onClick={redcount} style={{backgroundColor : "red"}}>+1</button>
      </div>
    </div>
  )
}

export default LoduBoard
