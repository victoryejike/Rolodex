import React from 'react';
import './cardlist.style.css';
import Card from '../card.component/card.component'

const Cardlist = (props) => {
    return(
        <div className='cardlist'>
            {props.monsters.map(monster=>
                (<Card key={monster.id} monsters={monster}/>))}
        </div>
    )
}

export default Cardlist;