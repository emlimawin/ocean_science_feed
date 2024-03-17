import React from 'react';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import './Main.css';

const Main = () => {
    return (
        <div className='main'>
            <ResultsContainer />
            <div className='columnLeft'></div>
            <div className='columnRight'></div>
        </div>
    );
};

export default Main;