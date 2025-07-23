import {useState, createRef} from "react"


const Person = ({name, age}) => {
    const roleInputField = createRef();
    const [role, setRole] = useState("unknown");

    const updateRole  = () => {
        setRole(roleInputField.current.value);
    }

    const bornYear = () => {
        return new Date().getFullYear() - age;
    };

    return(
        <div>
            <h3>Person's data</h3>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Born year: {bornYear()}</p>
            <p>Role: {role}</p>
            <input type="text" ref={roleInputField} id="personRole" name="personRole" placeholder="input"/>
            <button onClick={updateRole}>update</button>
        </div>
    );
}

export default Person;