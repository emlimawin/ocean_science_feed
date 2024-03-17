import React from 'react';
import './ResultItem.css';

const ResultItem = () => {
    return (
        <div className='cardWrapper'>
            <img className="postImage" alt=""></img>
            <div className='textWrapper'>
                <h2>Topic</h2>
                <p className='postDescription'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</p>
                <p className='dots'>. . .</p>
                <button className='btn'>
                    <p className='btn-text'>more</p>
                    <div className='arrow'></div>
                    </button>
            </div>
        </div>
    );
};

export default ResultItem;