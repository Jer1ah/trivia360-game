import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import HighScoreListItem from './HighScoreListItem';

import '../css/HighScores.css';

class HighScores extends React.Component {
    renderHighScores = () => {
        let filteredList = this.props.highScores.sort(function(a, b) {
            return b[0]-a[0];
        });
        let list = filteredList.map((player, index) => {
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

const mapStateToProps = (state) => {
    return {
        highScores: state.highScores
    };
};

export default connect(mapStateToProps)(HighScores);