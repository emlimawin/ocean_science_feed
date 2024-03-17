import React from 'react';
import './SortResults.css'

const SortResults = () => {
    return (
        <div className='sortContainer'> 
           
            <div className='dropDown'>
                <p className='selectChoice'>sort by</p>
                <div className='arrowSort'></div>
                <ul className='dropDownChoice'>
                    <li className='sortChoice'>Newest</li>
                    <li className='sortChoice2'>Rating</li>
                </ul>
            </div>
        </div>
    );
};

export default SortResults;