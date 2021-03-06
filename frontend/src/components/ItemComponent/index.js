import React from 'react'
import './estilo.css'

export default  function ItemComponente(props){
    return(
        <li>
            item da desc: {props.name}
        </li>
    )
}