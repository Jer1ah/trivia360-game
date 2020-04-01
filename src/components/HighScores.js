import React from 'react';
import { Link } from 'react-router-dom';

import '../css/HighScores.css';

const highScores = () => {
    return (
        <div className='highScores'>
            <h1>Leaderboard</h1>
            <ul className='highScores__list'>
                <li className='highScores__listItem'>
                    <h3 className='playerName'><span>1.</span> Stan Lee</h3>
                    <h3 className='playerScore'>720</h3>
                </li>
                <li className='highScores__listItem'>
                    <h3 className='playerName'><span>2.</span> Lebron James</h3>
                    <h3 className='playerScore'>560</h3>
                </li>
                <li className='highScores__listItem'>
                    <h3 className='playerName'><span>3.</span> Darth Vader</h3>
                    <h3 className='playerScore'>480</h3>
                </li>
                <li className='highScores__listItem'>
                    <h3 className='playerName'><span>4.</span> Captain America</h3>
                    <h3 className='playerScore'>400</h3>
                </li>
                <li className='highScores__listItem'>
                    <h3 className='playerName'><span>5.</span> Zendaya</h3>
                    <h3 className='playerScore'>310</h3>
                </li>
            </ul>
            <Link to="/" className="highScoreLink">Go Home</Link>
        </div>
    );
};

export default highScores;