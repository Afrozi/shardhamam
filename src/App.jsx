import { useState } from 'react'
import './App.css'
import ProductTab from './ProductTab'
import Msg from './Msg'
import Button from './Button'
import Form from './Form'
import Counter from './Counter'
import LikeButton from './LikeButton'
import LoduBoard from './LoduBoard'
import TodoList from './TodoList'
import Lottery from './Lottery'
import Ticketport from './Ticketport'

function App() {

  return (
    <>
   {/* <Ticketport ticket={[0,1,2]}/>
   <Ticketport ticket={[5,6,7,7,8]}/> */}
   <Lottery/>
    </>
  )
}

export default App
