import React from 'react';

import '../css/Header.css';

const Header = () => {
    return (
        <div className='header'>
            <h1 className='header__title'>Trivia 360</h1>
            <ul className='header__list'>
                <li className='header__listItem'>Play Game</li>
                <li className='header__listItem'>High Scores</li>
            </ul>
        </div>
    );
};

export default Header;