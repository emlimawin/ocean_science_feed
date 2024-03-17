import React from 'react';
import './Footer.css';
import waves from '../../images/Waves.svg';
import logo from '../../images/Coral_Logo.svg';

const Footer = () => {
    return (
        <div className='footerWrapper'>
            <div className='columnLeft'></div>
            <div className='columnRightFooter'>
                <image className='waves' src={logo} alt="waves"></image>
            </div>
        </div>
    );
};

export default Footer;