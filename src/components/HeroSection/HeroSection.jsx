import React from 'react';
import './HeroSection.css';


const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-container">
                {/* Left Side - Hero Animation GIF */}
                <div className="hero-animation">
                    <img
                        src="/assets/heroSectionComponents/newAnimation.gif"
                        alt="BUSEit Hero Animation"
                        className="hero-gif"
                    />
                </div>

                {/* Right Side - Hero Content */}
                <div className="hero-content">
                    {/* Headline */}
                    <h1 className="hero-headline">
                        Buy Better<br />
                        Sell Smarter
                    </h1>

                    {/* Description */}
                    <p className="hero-description">
                        The trusted marketplace for verified pre-owned goods. Buy safely, sell effortlessly, all inside one app.
                    </p>

                    {/* App Store Badges */}
                    <div className="app-badges">
                        <a
                            href="https://apps.apple.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="badge-link"
                        >
                            <img
                                src="/assets/Apple and google download/Download_on_the_App_Store_Badge.svg"
                                alt="Download on App Store"
                                className="app-badge apple-badge"
                            />
                        </a>

                        <a
                            href="https://play.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="badge-link"
                        >
                            <img
                                src="/assets/Apple and google download/Google_Play_Store_badge_EN.svg"
                                alt="Get it on Google Play"
                                className="app-badge google-badge"
                            />
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Banner - At bottom of Hero Section */}
            <div className="hero-footer-banner">
                <p className="hero-footer-text">everything preowned</p>
            </div>
        </section>
    );
};

export default HeroSection;
