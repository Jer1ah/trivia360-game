import { combineReducers } from 'redux';

const sampleReducer = (state='dummyCode', action) => {
    switch(action.type) {
        case 'POSITIVE':
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    staticState: sampleReducer
});