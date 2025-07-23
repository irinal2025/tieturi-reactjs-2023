import {useState} from "react"

const Counter = () => {
    // Luodaan state -muuttuja Counter (number)
    const [counter,setCounter] = useState(0);
    const increase  = () => {
        setCounter(counter + 1);
        console.log("Counter: " + counter);
    }
    const decrease  = () => {
        setCounter(counter - 1);
        console.log("Counter: " + counter);
    }

    return(
        <div>
            <h3>Counter: {counter}</h3>
            <div>
                <button onClick={increase}>+</button>
                <button onClick={decrease}>-</button>              
            </div>

        </div>


    );
}

export default Counter;