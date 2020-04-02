import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Header.css';

const Header = () => {
    return (
            <div className='header'>
                <h1 className='header__title'>Trivia 360</h1>
                <ul className='header__list'>
                    <li className="header__listItem">
                        <Link to='/question' className="link">Play Game</Link>
                    </li>
                    <li className="header__listItem">
                        <Link to='/highscores' className="link">High Scores</Link>
                    </li>
                    <li className="header__listItem">
                        <Link to='/howtoplay' className="link">How to Play</Link>
                    </li>
                </ul>
            </div>
    );
};

export default Header;