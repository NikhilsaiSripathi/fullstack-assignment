import React from 'react';
import './Header.css';

const Header = ({ onHelpCenterClick, onSubmitRequest }) => {
    return (
        <header className="header">
            <div className="header-left">
                <h1>Abstract</h1>
                <span className="separator">|</span>
                <h1 onClick={onHelpCenterClick}>Help Center</h1>
            </div>
            <div className="header-right">
                <button className="request-button" onClick={onSubmitRequest}>
                    Submit a request
                </button>
            </div>
        </header>
    );
};

export default Header;
