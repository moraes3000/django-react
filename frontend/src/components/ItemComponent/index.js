import React from 'react'
import './estilo.css'

export default function ItemComponente(props) {
    const status = props.status
    return (
        <li>
            {props.name} - Status: {status ? <span>Finalizado</span> : <span>Incompleto</span>}
        </li>
    )
}