export const setTechnology = text => ({
    type: actions.SET_TECHNOLOGY,
    text
});

export const updateCounter = by => ({
    type: actions.UPDATE_COUNTER,
    aggregator: sum => sum + by
});

export const toggleTimer = (timerText, timeStyle, timerRef) => ({
    type: actions.TOGGLE_TIMER,
    timerText,
    timeStyle,
    timerRef
});

export const handleTimer = (timerRef) => ({
    type: actions.HANDLE_TIMER,
    timerRef
});

export const tick = time => ({
    type: actions.TICK_TIMER,
    time
});

export const actions = {
    SET_TECHNOLOGY: 'SET_TECHNOLOGY',
    UPDATE_COUNTER: 'UPDATE_COUNTER',
    TOGGLE_TIMER: 'TOGGLE_TIMER',
    HANDLE_TIMER: 'HANDLE_TIMER',
    TICK_TIMER: 'TICK_TIMER'
}
