import { combineReducers } from 'redux';

const timerReducer = (state=0, action) => {
    switch(action.type) {
        case 'TIMER_START':
            return state + action.payload;
        case 'RESET_GAME':
            return 0;
        default:
            return state;
    }
};

const answersReducer = (state=0, action) => {
    switch(action.type) {
        case 'RIGHT_ANSWER':
            return state + action.payload;
        case 'WRONG_ANSWER':
            return state - action.payload;
        case 'RESET_GAME':
            return 0;
        default:
            return state;
    }
};

const nextQuestionReducer = (state=0, action) => {
    switch(action.type) {
        case 'NEXT_QUESTION':
            return state + action.payload;
        case 'RESET_GAME':
            return 0;
        default:
            return state;
    }
};

const highScoresReducer = (state=[[350, "Captain America"], [300, "SpiderMan"], [200, "Darth Vader"]], action) => {
    switch(action.type) {
        case 'ADD_HIGHSCORE':
            return [...state, action.payload];
        default:
            return state;
    }
};


export default combineReducers({
    timer: timerReducer,
    score: answersReducer,
    index: nextQuestionReducer,
    highScores: highScoresReducer
});