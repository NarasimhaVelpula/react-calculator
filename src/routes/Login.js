import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import './Login.css'
import { Button } from '@mui/material';
import styled from '@emotion/styled';
import {useNavigate} from 'react-router-dom'

function Login() {
  const StyledText=styled(TextField)`
    margin-top: 10px
  `
  const StyledButton=styled(Button)`
    margin-top: 50px;
  `
  let navigate=useNavigate()

  const HandleSubmit=()=>{
      console.log("hre")
      
      navigate('/home')
  }

  return (
    <div className='form'>
        <h1 style={{color:"green"}}>Calculator</h1>
        <StyledText id="email" 
            label="Email" 
            variant="standard" 
            color="success"
            autoComplete='off'
            type="email"
            fullWidth
        />
        <StyledText 
            id="password" 
            label="Password" 
            type="password" 
            className='feild'
            variant="standard" 
            color="success"
            fullWidth
        />
        <StyledButton
            className="loginButton" 
            type="button"
            color="success"
            variant="contained"
            onClick={HandleSubmit}
        >
            Login
        </StyledButton>


    </div>
  )
}

export default Login