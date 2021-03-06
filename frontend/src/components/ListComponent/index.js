import React from 'react'
import './estilo.css'
import ItemComponente from '../ItemComponent'

export default function ListComponent(props) {
    const items = props.items

    return (
        <div>
            <h2>{props.listName}</h2>

            <ul>
                {items.map(item => <ItemComponente key={item.id} name={item.name} status={item.done}/>)}
            </ul>
        </div>
    )
}