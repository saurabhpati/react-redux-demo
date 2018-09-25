import React from "react";
import { store } from "./store";
import { updateCounter } from "./actions";

const increment = () => {
    store.dispatch(updateCounter(1));
}

const decrement = () => {
    store.dispatch(updateCounter(-1));
}

const Counter = (props) => {
    return (
        <React.Fragment>
            <p>
                {props.count}
            </p>
            <div>
                <button type="button" onClick={increment}>Increase</button>
                <button type="button" onClick={decrement}>Decrease</button>
            </div>
        </React.Fragment>
    );
}

export default Counter;