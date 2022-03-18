import { Button } from '@mui/material'
import React from 'react'
import './CalculatorButton.css'

function CalculatorButton(props) {
  const {text, handleClick}=props
  

  return (
      <div className='button'>
    <Button
        color="success"
        variant="contained"
        margin="10px"
        onClick={(e)=>{handleClick(text)}}
    >
            {text}
    </Button>
    </div>
  )
}

export default CalculatorButton