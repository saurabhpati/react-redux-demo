import { actions } from "../actions";

export default (state, action) => {
    switch (action.type) {
        case actions.SET_TECHNOLOGY:
            return { ...state, tech: action.text };

        case actions.UPDATE_COUNTER:
            return { ...state, count: action.aggregator(state.count) };

        case actions.TOGGLE_TIMER:
            return { ...state, timerText: action.timerText, timeStyle: action.timeStyle, timerRef: action.timerRef };

        case actions.HANDLE_TIMER:
            return { ...state, timerRef: action.timerRef };

        case actions.TICK_TIMER:
            return { ...state, time: action.time };

        default:
            return state;
    }
};