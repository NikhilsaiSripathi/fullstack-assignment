import React, { useState } from 'react';
import './NewCardForm.css';

const NewCardForm = ({ onCardCreated }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const newCard = {
            id: Math.random().toString(36).substr(2, 9), 
            title,
            description,
        };

        fetch('http://localhost:5000/cards', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCard),
        })
        .then(response => response.json())
        .then(data => {
            setTitle('');
            setDescription('');
            onCardCreated(data);
        })
        .catch(error => {
            console.error('Error creating card:', error);
        });
    };

    return (
        <form className="new-card-form" onSubmit={handleSubmit}>
            <h2>Create a New Card</h2>
            <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Create Card</button>
        </form>
    );
};

export default NewCardForm;