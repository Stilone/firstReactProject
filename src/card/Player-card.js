import React from 'react';
import './player-card.css';

const PlayerCard = (props) => {
    const {name, level, onCloseClick} = props;
    return (
        <div className={props.btnClosed}>
            <button className="playerExit" onClick={onCloseClick}>X</button>
            <img className="playerImg" src="#" alt=""/>
            <h2 className="playerName">{name}</h2>
            <p className="playerLvl">{level}</p>
        </div>
    )
}

export default PlayerCard;