import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { addToCount, 
         rightAnswer, 
         wrongAnswer, 
         nextQuestion, 
         resetGame,
         addHighScore } 
from '../actions';

import homeIcon from '../img/home.svg';
import '../css/Question.css';

import questions from '../game-data/questions';
import answers from '../game-data/answers';
import rightAnswers from '../game-data/rightAnswers';

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.userInput = React.createRef();
    }

    componentDidMount() {
        //setInterval(() => {
        //    this.props.addToCount();
        //}, 1000);
    }

    renderQuestion = (index) => {
        return (
            <div>
                <div className='question'><p>{questions[index]}</p></div>
                <ul className='answersList' onClick={(event) => {
                    if(event.target.tagName === "LI") {
                        if(event.target.innerHTML === rightAnswers[index]) {
                            this.props.rightAnswer();
                        } else {
                            this.props.wrongAnswer();
                        }
                        this.props.nextQuestion();
                    }
                }}>
                    <li className='answersList__item'>{answers[index][0]}</li>
                    <li className='answersList__item'>{answers[index][1]}</li>
                    <li className='answersList__item'>{answers[index][2]}</li>
                    <li className='answersList__item'>{answers[index][3]}</li>
                </ul>
            </div>
        );
    };

    renderFinal = () => {
        return (
            <div className="final">
                <h1>You Scored: {this.props.score} Points</h1>
                <input type="text" placeholder="Enter Name" ref={this.userInput}/>
                <button onClick={() => {
                    this.props.addHighScore([this.props.score, this.userInput.current.value]);
                    this.props.resetGame();
                }}><Link to="/highscores" className="buttonLink">Add to Leaderboard</Link></button>
                <ul className="buttonList">
                    <li onClick={() => {
                            this.props.resetGame();
                        }}>
                        Retake Quiz
                    </li>
                    <li onClick={this.props.resetGame}>
                        <Link to="/" className="homeLink">Go Home</Link>
                    </li>
                </ul>
            </div>
        );
    };

    render() {
        let { index } = this.props;
        console.log();
        return (
            <div>
                <div className='question__header'>
                    <div className='homeButton' onClick={this.props.resetGame}><Link to="/"><img src={homeIcon} alt='Home Icon'/></Link></div>
                    <div className='playerScore'><h3>{this.props.score}</h3></div>
                    <h2 className='playerTimer'>:{this.props.counter}</h2>
                </div>
                {questions.length !== index ? this.renderQuestion(index) : this.renderFinal()}
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
    nextQuestion,
    resetGame,
    addHighScore
})(Question);