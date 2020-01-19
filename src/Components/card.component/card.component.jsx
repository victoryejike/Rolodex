import React from 'react'

import './card.style.css';

const Card = (props) => {
    return(
    <div className='card-container'>
        <img alt='robos' src={`https://robohash.org/${props.monsters.id}?set=set2&size=180x180`}/>
        <h2>{props.monsters.name}</h2>
        <p>{props.monsters.email}</p>
    </div>
        
    )
}

export default Card;