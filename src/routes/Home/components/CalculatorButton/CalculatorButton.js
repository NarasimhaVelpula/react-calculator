import { styled } from '@material-ui/core'
import { Button } from '@mui/material'
import React from 'react'

function CalculatorButton(props) {
  const {text, handleClick}=props
  
  return (
    <Button
        color="success"
        variant="contained"
        margin="10px"
        onClick={(e)=>{handleClick(text)}}
    >
            {text}
    </Button>
  )
}

export default CalculatorButton