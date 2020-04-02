import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 

import reducers from '../reducers';

import Header from '../components/Header';
import HighScores from '../components/HighScores';
import Question from '../components/Question';
import HowToPlay from '../components/HowToPlay';

import '../css/App.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware()
));

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Header}/>
                    <Route exact path='/highscores' component={HighScores}/> 
                    <Route exact path='/question' component={Question}/>
                    <Route exact path='/howtoplay' component={HowToPlay}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
};

export default App;