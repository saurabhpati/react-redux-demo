import { createStore } from "redux";
import reducer from "../reducers";

const initialState = {
    count: 0,
    timerText: 'Show Time',
    timeStyle: {
        display: 'none'
    },
    time: new Date().toLocaleTimeString(),
    timerRef: null,
    tech: "React"
};

export const store = createStore(reducer, initialState);