import React from 'react';
import './Card.css';

const Card = ({ title, description }) => {
    return (
        <div className="card">
            <h3>{title}</h3>
            <hr/>
            <p>{description}</p>
        </div>
    );
};

export default Card;