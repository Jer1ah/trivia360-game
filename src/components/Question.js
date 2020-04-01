import React from 'react';
import { Link } from 'react-router-dom';

import homeIcon from '../img/home.svg';
import '../css/Question.css';

const Question = () => {
    return (
        <div>
            <div className='question__header'>
                <div className='homeButton'><Link to="/"><img src={homeIcon} alt='Home Icon'/></Link></div>
                <div className='playerScore'><h3>460</h3></div>
                <h2 className='playerTimer'>:45</h2>
            </div>
            <div className='questionTimer'><h3>15</h3></div>
            <div className='question'><p>Which two teams were the expansion teams in the NFL in 1995?</p></div>
            <ul className='answersList'>
                <li className='answersList__item'>Cowboys and Packers</li>
                <li className='answersList__item'>Falcons and Jaguars</li>
                <li className='answersList__item'>Panthers and Jaguars</li>
                <li className='answersList__item'>Jets and Panthers</li>
            </ul>
        </div>
    );
};

export default Question;