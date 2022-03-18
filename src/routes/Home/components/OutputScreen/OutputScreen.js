import React from 'react'
import './OutputScreen.css'

function OutputScreen(props) {
    let {expression}=props
  return (
    <div className="outputScreen">{expression}</div>
  )
}

export default OutputScreen