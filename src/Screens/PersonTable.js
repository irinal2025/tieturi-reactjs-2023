import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {useState, createRef} from "react";
import PersonTableRow from "../Components/PersonTableRow";



const PersonTable = () => {
    const[personArray, setPersonArray ] = useState(
        [
            {ID: "1", name: "Pekka", age: 1},
            {ID: "2", name: "Kalle", age: 2},
            {ID: "3", name: "Maija", age: 3}
        ]
    );
    const personInput = createRef();

    const addPersonToTable = () => {
        //Lue personInput ja lisää taulukkoon uusi hlö:
        const person = {
            key: personArray.length + 1,
            ID: personArray.length + 1,
            name: personInput.current.value,
            age: 30
        }
        setPersonArray([...personArray, person]);
    }

    const removePerson = (id) => {
        const updatedPersonArray = personArray.filter( (person) => person.ID !== id);
        setPersonArray( updatedPersonArray );
    }

    const createTableFromPersonArray = () => {
        return personArray.map((person)=> 
            <PersonTableRow
                key={person.ID}
                id={person.ID}
                name={person.name}
                age={person.age}
                removePersonCallback={removePerson}
            />
        );
    }




    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {createTableFromPersonArray()}
                <tr>
                    <td colSpan={3}><input ref={personInput} type="text" id="newPerson" placeholder="Add name..."></input></td>
                    <td><Button variant="success" size="lg" onClick={addPersonToTable}>Add</Button></td>
                </tr>  
            </tbody>
        </Table>
    );
}


export default PersonTable;