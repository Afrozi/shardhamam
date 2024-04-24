import React from 'react'
import TicketCount from './TicketCount'
import './Ticketport.css'
const Ticketport = ({ticket}) => {
  return (
    <div className='ticketport'>
      <p>Ticket</p>
        {ticket.map((num,idx)=>(
            <TicketCount num={num} key={idx}/>
        ))}
    </div>
  )
}

export default Ticketport
