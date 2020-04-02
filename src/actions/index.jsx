export const addToCount = () => {
    return {
        type: 'TIMER_START',
        payload: 1
    };
};

export const rightAnswer = () => {
    return {
        type: 'RIGHT_ANSWER',
        payload: 100
    }
};

export const wrongAnswer = () => {
    return {
        type: 'WRONG_ANSWER',
        payload: 50
    }
}; 

export const nextQuestion = () => {
    return {
        type: 'NEXT_QUESTION',
        payload: 1
    };
};

export const resetGame = () => {
    return {
        type: 'RESET_GAME',
        payload: 0
    }
};

export const addHighScore = (highscore) => {
    return {
        type: 'ADD_HIGHSCORE',
        payload: highscore
    }
};