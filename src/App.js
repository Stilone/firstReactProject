import React, {useEffect, useState} from 'react';
import Input from "./Input";
import Card from "./card/Card";
import Button from "./button/Button";
import InputPeople from "./inputCardPeople/InputPeople";


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link

} from "react-router-dom";

const styles = {
    h1: {
        textAlign: 'center',
        listStyleType: 'none'
    }
}



function App() {
    const urlElement = 'https://raider.io/api/v1/mythic-plus/runs?season=season-sl-1&region=eu&dungeon=all&page=0';
    const [player, setPlayer] = useState({
        name: 'Unnamed',
        level: 1
    })

    const sendRequest = (method, url) => {
        return fetch(url).then(response => {
            return response.json();
        })
    }


    useEffect(() => {
        sendRequest('GET', urlElement)
            .then(data => {
                const {name, level} = data.rankings[0].run.roster[0].character;
                setPlayer({
                    name: name,
                    level: level
                });
            })
    }, []);


    return (
        <Router>
            <ul  style={styles.h1}>
                <li>
                    <h1>First Project</h1>
                </li>
                <li>
                    <Link to="/Home">Home</Link>
                </li>
                <li>
                    <Link to="/Button">Button</Link>
                </li>
                <li>
                    <Link to="/InputPeople">InputPeople</Link>
                </li>
            </ul>

            <Switch>
                <div className="wrapper">
                    <Route path="/Home">
                        <Input/>
                        <Card name={player.name} level={player.level}/>
                    </Route>
                    <Route path="/Button">
                        <Button />
                    </Route>
                    <Route path="/InputPeople">
                        <InputPeople />
                    </Route>
                </div>
            </Switch>
        </Router>
    );
}

export default App;
