import React from 'react'
import {api} from './actions'


const Ajax = (props) => {

  return (
    <div>
     <button onMouseEnter = {props.hide} onClick = {props.serve}>
      ajax
     </button>
    </div>
  )
}



export default Ajax
