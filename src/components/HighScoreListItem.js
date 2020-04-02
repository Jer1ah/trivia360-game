import React from 'react';

const highScoreListItem = (props) => {
    return (
        <li className='highScores__listItem'>
            <h3 className='playerName'><span>{props.index}.</span> {props.playerName}</h3>
            <h3 className='playerScore'>{props.playerScore}</h3>
        </li>
    );
};

export default highScoreListItem;