import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import './Login.css'
import { Button } from '@mui/material';
import styled from '@emotion/styled';
import {Link, useNavigate} from 'react-router-dom'

function Login() {
  const StyledText=styled(TextField)`
    margin-top: 10px
  `
  const StyledButton=styled(Button)`
    margin-top: 50px;
  `
  let navigate=useNavigate()

  const HandleSubmit=()=>{      
      navigate('/home')
  }

  return (
    <div className='form'>
        <img style={{padding:'10px 10px'}}
      src="https://partner.tradecred.com/assets/img/TradeCredLogo.png"
      alt="new"
      />
        <h1 style={{color:"black"}}>Calculator Login</h1>
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

        <Link to="/signin">
        <Button 
            variant="text"
            color="success"
        >
            Not Registered, Click to here to Sign In
        </Button>
        </Link>

    </div>
  )
}

export default Login