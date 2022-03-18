import React from 'react'
import './OutputScreen.css'
import {useSelector} from 'react-redux'

function OutputScreen() {
  const expression=useSelector((state)=>state.expression)
  return (
    <div className="outputScreen">{expression}</div>
  )
}

export default OutputScreen