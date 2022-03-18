import React,{useState} from 'react'
import CalculatorButton from './components/CalculatorButton/CalculatorButton'
import OutputScreen from './components/OutputScreen/OutputScreen'
import './Home.css'
import {useDispatch} from 'react-redux'
import { Button } from '@mui/material';
import {useNavigate} from 'react-router-dom'
import {adder,remover,evaluator,reset} from '../../expressionSlice'

function Home() {
  let dispatcher=useDispatch()
  let navigate=useNavigate()
  const handleClick=(exp)=>{
      dispatcher(adder(exp))
  }

  const handleEvaluate=(e)=>{
      dispatcher(evaluator())
  }

  const handleReset=(e)=>{
      dispatcher(reset())
  }

  const handleDelete=(e)=>{
      dispatcher(remover())
  }

  const handleLogout=()=>{
    navigate('/')
  }

  return (
    <>
    <div className="calculator">
        <img style={{padding:'10px 10px'}}
      src="https://partner.tradecred.com/assets/img/TradeCredLogo.png"
      alt="new"
      />
      <h1 style={{textAlign:'center'}}>Calculator</h1>
        <OutputScreen />
        <hr />
        <div className="buttons">
            <div className="numbers">
            <CalculatorButton text="1" handleClick={handleClick} />
            <CalculatorButton text="2" handleClick={handleClick} />
            <CalculatorButton text="3" handleClick={handleClick} />
            <CalculatorButton text="4" handleClick={handleClick} />
            <CalculatorButton text="5" handleClick={handleClick} />
            <CalculatorButton text="6" handleClick={handleClick} />
            <CalculatorButton text="7" handleClick={handleClick} />
            <CalculatorButton text="8" handleClick={handleClick} />
            <CalculatorButton text="9" handleClick={handleClick} />
            <CalculatorButton text="0" handleClick={handleClick} />
            <CalculatorButton text="00" handleClick={handleClick} />
            <CalculatorButton text="." handleClick={handleClick} />
            </div>
            <div className="operations">
            <CalculatorButton text="CE" handleClick={handleReset} />
            <CalculatorButton text="-" handleClick={handleClick} />
            <CalculatorButton text="/" handleClick={handleClick} />
            <CalculatorButton text="*" handleClick={handleClick} />
            <CalculatorButton text="+" handleClick={handleClick} />
            <CalculatorButton text="DEL" handleClick={handleDelete} />
            <CalculatorButton text="=" handleClick={handleEvaluate} />
            </div>
            
        </div>
    </div>
    <div style={{textAlign: 'center'}}>
    <Button
            className="loginButton" 
            type="button"
            color="success"
            variant="contained"
            onClick={handleLogout}
        >
            Logout
        </Button>
    </div>
    </>
  )
}

export default Home