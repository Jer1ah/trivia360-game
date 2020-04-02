import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { addToCount, rightAnswer, wrongAnswer, nextQuestion } from '../actions';

import homeIcon from '../img/home.svg';
import '../css/Question.css';

import questions from '../game-data/questions';
import answers from '../game-data/answers';
import rightAnswers from '../game-data/rightAnswers';

class Question extends React.Component {
    componentDidMount() {
        //setInterval(() => {
        //    this.props.addToCount();
        //}, 1000);
    }

    render() {
        let { index } = this.props;
        return (
            <div>
                <div className='question__header'>
                    <div className='homeButton'><Link to="/"><img src={homeIcon} alt='Home Icon'/></Link></div>
                    <div className='playerScore'><h3>{this.props.score}</h3></div>
                    <h2 className='playerTimer'>:{this.props.counter}</h2>
                </div>
                <div>
                    <div className='question'><p>{questions[index]}</p></div>
                    <ul className='answersList' onClick={this.props.nextQuestion}>
                        <li className='answersList__item'>{answers[index][0]}</li>
                        <li className='answersList__item'>{answers[index][1]}</li>
                        <li className='answersList__item'>{answers[index][2]}</li>
                        <li className='answersList__item'>{answers[index][3]}</li>
                    </ul>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        counter: state.timer,
        score: state.score,
        index: state.index
    };
};

export default connect(mapStateToProps, {
    addToCount,
    rightAnswer,
    wrongAnswer,
    nextQuestion
})(Question);