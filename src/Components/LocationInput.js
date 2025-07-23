import {createRef} from "react";
import './LocationInput.css'
import Button from "react-bootstrap/Button";


const LocationInput = ({callback}) => {
    const locationInputField = createRef();
    const updateLocation  = () => {
        console.log("New City: " + locationInputField.current.value);
        callback(locationInputField.current.value)
    }


    return(
        <div>
            <input type="text" ref={locationInputField} id="locationName" name="locationName" placeholder="Helsinki"/>
            <Button onClick={updateLocation} variant="outline-dark" size="lg">update</Button>
        </div>
    );
}

export default LocationInput;