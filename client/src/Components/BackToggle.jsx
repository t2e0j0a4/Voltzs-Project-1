import React from 'react'

// Uses
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const BackToggle = ({top, left}) => {
  return (
    
    <div className={`goBackPage w-[40px] h-[40px] rounded-[50%] flex justify-center items-center absolute top-[${top}] left-[${left}]`}>
        <Link to='/'><FiArrowLeft fontSize='28px' fontWeight='800' color='#fff'/></Link>
    </div>
    
  )
}

export default BackToggle

// Login Top - 20, Left - 30
// Register Top - 15, Left - 20