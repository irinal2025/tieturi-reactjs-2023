import Button from 'react-bootstrap/Button';


const createPersonTableRow = ({id, name, age, removePersonCallback}) => {
    return(
        <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{age}</td>
            <td><Button variant="danger" size="lg" onClick={() => removePersonCallback(id)}>Delete</Button></td>
        </tr>
    );
}

export default createPersonTableRow;