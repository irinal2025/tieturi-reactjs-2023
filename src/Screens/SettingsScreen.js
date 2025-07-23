import Header from "../Components/Header";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../counterSlice";
const SettingsScreen = () => {

    //Counterin arvo haetaan storesta
    const counter = useSelector( state => state.counter.value );
    const dispatch = useDispatch();

    const increaseCounter = () => {
        //Päivitetään counterin arvo +1
        dispatch( increment() );
    }

    return(
        <div>
            <Header title="Settings"/>
            <p>Counter: {counter}</p>
            <Button onClick={() => increaseCounter()} variant="outline-dark" size="lg">Update</Button>
        </div>
    );
}

export default SettingsScreen;