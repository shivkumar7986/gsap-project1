import React from 'react';
import { openingHours, socials, storeInfo } from '../../constants';

const Contact = () => {
    return (
        <section id="contact">
            <img src="/images/leaf-left.png" alt="leaf" id="f-left-leaf" />
            <img src="/images/leaf-right.png" alt="leaf" id="f-right-leaf" />
            
            <div className="content">
                <div>
                    <h2>{storeInfo.heading}</h2>
                    <p className="mt-5">{storeInfo.address}</p>
                    <p>{storeInfo.contact.phone} | {storeInfo.contact.email}</p>
                </div>
                
                <div className="mt-10">
                    <h3>Opening Hours</h3>
                    <div className="flex flex-col items-center gap-2 mt-5">
                        {openingHours.map((hours, index) => (
                            <p key={index}>{hours.day}: {hours.time}</p>
                        ))}
                    </div>
                </div>
                
                <div className="mt-10 flex gap-5 justify-center">
                    {socials.map((social, index) => (
                        <a key={index} href={social.url} className="hover:opacity-80 transition-opacity">
                            <img src={social.icon} alt={social.name} className="w-8 h-8 object-contain" />
                        </a>
                    ))}
                </div>
            </div>
            
            <img src="/images/drink1.png" alt="Drink" className="drink-img" />
        </section>
    );
};

export default Contact;
