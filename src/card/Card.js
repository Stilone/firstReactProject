import React, {useState} from 'react';
import PlayerCard from "./Player-card";
import './card.css';

const Card = (props) => {
    const {name, level} = props;
    const [btnClosed, setBtnOpen] = useState('playerCardNone');
    const [btnBlack, setSilver] = useState('playerOpen');

    const handleCloseClick = () => {
        setBtnOpen('playerCardNone')
        setSilver('playerOpen')
    }

    const handleSearchClick = () => {
        setBtnOpen('playerCard')
        setSilver('playerOpenBlack')
    }

    return (
        <div>
            <button className={btnBlack} onClick={handleSearchClick}>Search Player</button>
            <PlayerCard name={name} level={level} btnClosed={btnClosed} onCloseClick={handleCloseClick}/>
        </div>
    )
}

export default Card;