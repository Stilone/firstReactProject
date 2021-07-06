import React, {useState} from 'react';
import './button.css'

let controlIndex = -1;

const Button = () => {
    const [white, setColor] = useState('btn-white');
    const color = ['btn-black','btn-yellow','btn-red','btn-blue','btn-green','btn-white'];


    const switchColor = () => {

        if(controlIndex < color.length - 1) {
            controlIndex += 1
            setColor(color[controlIndex])
        }else {
            controlIndex = 0
            setColor(color[controlIndex])
        }
    }
    return (
        <button className={white} onClick={switchColor}>klick</button>
    )
}

export default Button;