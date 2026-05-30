import React from 'react';
import { featureLists, goodLists, profileLists } from '../../constants';

const About = () => {
    return (
        <section id="about">
            <span className="badge">ABOUT US</span>
            
            <div className="content">
                <h2>A PASSION FOR PERFECT POURS</h2>
                <div className="sub-content">
                    <p>At Velvet Pour, we believe every drink tells a story. From classic recipes to modern mixology, our cocktails are crafted to elevate your senses and bring people together.</p>
                    <div>
                        <span>10+</span>
                        <p>Years of Mixology Excellence</p>
                    </div>
                </div>
            </div>

            <div className="top-grid mt-20">
                {featureLists.map((feature, index) => (
                    <div key={`feature-${index}`} className={`col-span-1 md:col-span-3 ${index === 0 ? 'xl:col-span-4' : 'xl:col-span-2'}`}>
                        <div className="w-full h-full bg-[#111] rounded-3xl p-5 flex items-center justify-center text-center">
                            <p className="text-xl font-modern">{feature}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bottom-grid">
                {profileLists.map((profile, index) => (
                    <div key={`profile-${index}`} className="col-span-1 md:col-span-3">
                        <img src={profile.imgPath} alt="Profile" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;
