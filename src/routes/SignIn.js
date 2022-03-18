import React from 'react'
import TextField from '@mui/material/TextField';
import './Login.css'
import { Button } from '@mui/material';
import styled from '@emotion/styled';
import {useNavigate} from 'react-router-dom'

function SignIn() {
    const StyledText=styled(TextField)`
    margin-top: 10px
  `
  const StyledButton=styled(Button)`
    margin-top: 50px;
  `
  let navigate=useNavigate()

  const HandleSubmit=()=>{      
      navigate('/')
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
        <StyledText 
            id="confirmPassword" 
            label="Confirm Password" 
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
            Register
        </StyledButton>

        

    </div>
  )
}

export default SignIn