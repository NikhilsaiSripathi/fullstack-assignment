import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Card from './components/Card';
import Footer from './components/Footer';
import NewCardForm from './components/NewCardForm';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function App() {
    const [cards, setCards] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);
    const [showCards, setShowCards] = useState(false);

    useEffect(() => {
        if (showCards) {
            fetch('http://localhost:5000/cards')
                .then(response => response.json())
                .then(data => {
                    setCards(data);
                    setFilteredCards(data); 
                })
                .catch(error => console.error('Error fetching cards:', error));
        }
    }, [showCards]);

    const handleHelpCenterClick = () => {
        setShowCards(true);
    };

    const handleSearch = (query) => {
        if (query === '') {
            setFilteredCards(cards);
        } else {
            setFilteredCards(cards.filter(card => 
                card.title.toLowerCase().includes(query.toLowerCase()) ||
                card.description.toLowerCase().includes(query.toLowerCase())
            ));
        }
    };

    const handleCardCreated = (newCard) => {
        const updatedCards = [...cards, newCard];
        setCards(updatedCards);
        setFilteredCards(updatedCards);
    };

    const handleSubmitRequest = () => {
        alert('Submit Request Clicked');
    };

    return (
        <div className="App">
            <Header onHelpCenterClick={handleHelpCenterClick} onSubmitRequest={handleSubmitRequest} />
            {showCards && (
                <>
                    <SearchBar onSearch={handleSearch} />
                    <NewCardForm onCardCreated={handleCardCreated} />
                    <div className="cards-container">
                        {filteredCards.map(card => (
                            <Card key={card.id} title={card.title} description={card.description} />
                        ))}
                    </div>
                </>
            )}
            <Footer />
        </div>
    );
}

export default App;