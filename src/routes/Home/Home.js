import React,{useState} from 'react'
import CalculatorButton from './components/CalculatorButton/CalculatorButton'
import OutputScreen from './components/OutputScreen/OutputScreen'
import './Home.css'

function Home() {
  const [expression, setExpression] = useState("")
  const handleClick=(exp)=>{
      let newexp=expression+exp
      setExpression(newexp)
  }

  const handleEvaluate=(e)=>{
      let ans=eval(expression)
      setExpression(ans)
  }

  const handleReset=(e)=>{
      setExpression("")
  }

  const handleDelete=(e)=>{
      let newExp=expression.slice(0,-1)
      setExpression(newExp)
  }

  return (
    <div className="calculator">
        <OutputScreen expression={expression} />
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
  )
}

export default Home