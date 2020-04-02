import React from 'react';
import { Link } from 'react-router-dom';

import '../css/HowToPlay.css';

const HowToPlay = () => {
    return (
        <div className="rules">
            <h1>Rules to the Game</h1>
            <ul className="rules__list">
                <li className="rules__listItem"><span>1.</span> There are a total of 33 questions.</li>
                <li className="rules__listItem"><span>2.</span> 100 points are added for every correct answer.</li>
                <li className="rules__listItem"><span>3.</span> 50 points are deducted for every wrong answer.</li>
            </ul>
            <Link to="/" className="rules__link">Go Home</Link>
        </div>
    );
};

export default HowToPlay;