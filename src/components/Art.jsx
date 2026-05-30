import React from 'react';

const Art = () => {
    return (
        <section id="art">
            <h2 className="split-text">THE ART</h2>
            <div className="content">
                {/* Optional additional content here */}
            </div>
            
            <div className="cocktail-img masked-img">
                {/* The mask is applied via CSS `.masked-img` */}
                <div className="masked-container w-full h-full bg-black/50 flex flex-col items-center justify-center relative">
                    <h2>THE PERFECT POUR</h2>
                    <div>
                        <h3>A Symphony of Flavors</h3>
                        <p>Experience the balance of taste and aesthetic in every glass.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Art;
