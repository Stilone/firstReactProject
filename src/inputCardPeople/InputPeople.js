import React, {useState} from "react";
import './inputPeople.css'
import {insertSort} from "./inputPeople.helpers";



const InputPeople = () => {
    const defaultForm = {name: '', surname: '', gender: '', iq: 0};
    const [form, setNewForm] = useState(defaultForm);
    const [people, setUsers] = useState([]);


    const handleNameChange = (event) => {
        const newForm = {...form};
        newForm[event.target.name] = event.target.value;
        setNewForm(newForm);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newPeople = [...people];
        newPeople.push(form);
        setUsers(newPeople);
        setNewForm(defaultForm);
    }


    const HandleSortPeopleClick = () => {
        const newPeople = insertSort(people)
        setUsers(newPeople)
    }

    const renderPeople = (person) => {
        return (
                <li className="people">{person.name}, {person.surname}, {person.gender}, IQ: {person.iq}</li>
        )
    }

    const renderButton = () => {
        if(people.length === 0) {
            return null;
        }
        return (
            <button onClick={HandleSortPeopleClick}>Отсортировать</button>
        )
    }


    return (
        <div>
        <form className="form-input" onSubmit={handleSubmit}>
            <label>
            <p className="text-input">Введите имя:</p>
            <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleNameChange}
            />
            </label>

            <label>
            <p className="text-input">Введите фамилию:</p>
            <input
                name="surname"
                type="text"
                value={form.surname}
                onChange={handleNameChange}
            />
            </label>

            <label>
            <p className="text-input">Введите пол:</p>
            <input
                name="gender"
                type="text"
                value={form.gender}
                onChange={handleNameChange}
            />
            </label>

            <label>
            <p className="text-input">Введите iq:</p>
            <input
                name="iq"
                type="number"
                value={form.iq}
                onChange={handleNameChange}
            />
            </label>

            <input type="submit" value="submit"/>
        </form>
            <ul className="ul-people">
                {people.map(renderPeople)}

            </ul>
            {renderButton()}
        </div>
    )
}

export default InputPeople;



