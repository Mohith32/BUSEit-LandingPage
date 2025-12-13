import React, { useState } from 'react';
import Card1 from './Card1/Card1';
import Card2 from './Card2/Card2';
import Card3 from './Card3/Card3';
import NavigationArrows from './NavigationArrows';
import './HowItWorks.css';


const HowItWorks = () => {
    // State for current card (0 = Card1, 1 = Card2, 2 = Card3)
    const [currentCard, setCurrentCard] = useState(0);

    // Handle navigation
    const handlePrevious = () => {
        setCurrentCard((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const handleNext = () => {
        setCurrentCard((prev) => (prev < 2 ? prev + 1 : prev)); // max 2 for 3 cards
    };

    return (
        <section id="how-it-works" className="how-it-works-section">
            <div className="how-it-works-container">
                {/* Header Content */}
                <div className="how-it-works-header">
                    {/* Pill Badge */}
                    <div className="section-pill">
                        <span className="pill-text">How It Works</span>
                    </div>

                    {/* Heading and Subtitle Group */}
                    <div className="header-text-group">
                        {/* Main Heading */}
                        <h2 className="section-heading">Ownership, Made Circular</h2>

                        {/* Subtitle */}
                        <p className="section-subtitle">
                            Sell what you don't need. Shop what you can trust.<br />
                            We handle the rest.
                        </p>
                    </div>
                </div>

                {/* Card Showcase - Conditional Rendering */}
                <div className="card-showcase">
                    {currentCard === 0 && <Card1 />}
                    {currentCard === 1 && <Card2 />}
                    {currentCard === 2 && <Card3 />}
                </div>

                {/* Navigation Arrows - 47px gap from card */}
                <NavigationArrows
                    onPrevious={handlePrevious}
                    onNext={handleNext}
                />
            </div>
        </section>
    );
};

export default HowItWorks;
