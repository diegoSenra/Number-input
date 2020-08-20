import React from 'react'
import {Link} from 'react-router-dom'

function Buttons(){

  return (
    
    <div id="buttonsDiv">
      <Link className="button" to="/dbForm">Database</Link>
      <Link className="button" to="/sumForm">Sum</Link>
    </div>
  )
}

export default Buttons