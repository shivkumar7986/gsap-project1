import React from 'react';
import { cocktailLists, mockTailLists } from '../../constants';

const Cocktails = () => {
    return (
        <section id="cocktails">
            <img src="/images/leaf-left.png" alt="leaf" id="c-left-leaf" />
            <img src="/images/leaf-right.png" alt="leaf" id="c-right-leaf" />
            
            <div className="list">
                <div className="popular">
                    <h2>Popular Cocktails</h2>
                    <p>Our most loved signature drinks</p>
                    <ul>
                        {cocktailLists.map((item, index) => (
                            <li key={index}>
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>{item.country} • {item.detail}</p>
                                </div>
                                <span>{item.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="loved">
                    <h2>Mocktails</h2>
                    <p>Refreshing zero-proof creations</p>
                    <ul>
                        {mockTailLists.map((item, index) => (
                            <li key={index}>
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>{item.country} • {item.detail}</p>
                                </div>
                                <span>{item.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Cocktails;
