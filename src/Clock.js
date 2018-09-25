import React from "react";
import { store } from "./store";
import { toggleTimer, handleTimer, tick } from "./actions";

const toggleTime = () => {
    let timerText = '';
    let timeStyle = {};
    let timerRef = null;

    const state = store.getState();

    if (state.timeStyle.display === 'block') {
        timerText = 'Show Time';
        timeStyle = { display: 'none' };
        clearInterval(state.timerRef);
    } else if (state.timeStyle.display === 'none') {
        timerText = 'Hide Time';
        timeStyle = { display: 'block' };
        timerRef = setInterval(timer, 1000);
    }

    store.dispatch(toggleTimer(timerText, timeStyle, timerRef));
}

const timer = () => {
    store.dispatch(tick(new Date().toLocaleTimeString()));
}

const pause = () => {
    clearInterval(store.getState().timerRef);
    store.dispatch(handleTimer(null));
}

const resume = () => {
    const timerRef = setInterval(timer, 1000);
    store.dispatch(handleTimer(timerRef));
}

const Clock = (props) => {
    return (
        <React.Fragment>
            <div style={props.timeStyle}>
                <span>{props.time}</span>
                <div>
                    <button type="button" onClick={pause} disabled={!props.isTimerRunning}>Pause</button>
                    <button type="button" onClick={resume} disabled={props.isTimerRunning}>Resume</button>
                </div>
            </div>
            <button type="button" onClick={toggleTime}>{props.timerText}</button>
        </React.Fragment>
    )
}

export default Clock;