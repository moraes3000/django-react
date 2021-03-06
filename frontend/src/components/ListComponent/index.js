import React from 'react'
import './estilo.css'
import ItemComponente from '../ItemComponent'

export default function ListComponent(props) {
    return (
        <div>
            <h2>{props.listName}</h2>

            <ul>
                <ItemComponente name={'meu item'}/>

            </ul>
        </div>
    )
}