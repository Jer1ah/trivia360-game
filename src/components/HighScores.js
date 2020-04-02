import React from 'react';
import { Link } from 'react-router-dom';

import highScores from '../game-data/highScores';
import HighScoreListItem from './HighScoreListItem';

import '../css/HighScores.css';

class HighScores extends React.Component {
    renderHighScores = () => {
        let list = highScores.map((player, index) => {
            return <HighScoreListItem 
                        playerName={player[1]}
                        playerScore={player[0]}
                        index={index + 1}
                    />
        });
        return (
            <ul className='highScores__list'>
                {list}
            </ul>
        );
    };

    render() {
        return (
            <div className='highScores'>
                <h1>Leaderboard</h1>
                {this.renderHighScores()}
                <Link to="/" className="highScoreLink">Go Home</Link>
            </div>
        );
    }
};

export default HighScores;