import React, { useState } from 'react';
import { sliderLists } from '../../constants';

const Menu = () => {
   

    const [currentIndex, setCurrentIndex] = useState(0);
    const currentDrink = sliderLists[currentIndex];

    const nextDrink = () => {
        setCurrentIndex((prev) => (prev + 1) % sliderLists.length);
    };

    const prevDrink = () => {
        setCurrentIndex((prev) => (prev - 1 + sliderLists.length) % sliderLists.length);
    };

    return (
        <section id="menu">
            <img src="/images/leaf-left.png" alt="leaf" id="m-left-leaf" />
            <img src="/images/leaf-right.png" alt="leaf" id="m-right-leaf" />
            
            <div className="cocktail-tabs">
                {sliderLists.map((item, index) => (
                    <button 
                        key={item.id} 
                        className={index === currentIndex ? "text-yellow border-yellow" : ""}
                        onClick={() => setCurrentIndex(index)}
                    >
                        {item.name}
                    </button>
                ))}
            </div>

            <div className="content">
                <div className="arrows">
                    <button onClick={prevDrink}>
                        <span>PREV</span>
                    </button>
                    <button onClick={nextDrink}>
                        <span>NEXT</span>
                    </button>
                </div>
                
                <div className="cocktail">
                    <img src={currentDrink.image} alt={currentDrink.name} />
                </div>
                
                <div className="recipe">
                    <div className="info">
                        <p id="title">{currentDrink.name}</p>
                    </div>
                    <div className="details">
                        <h2>{currentDrink.title}</h2>
                        <p>{currentDrink.description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Menu;
