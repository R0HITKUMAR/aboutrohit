import React from 'react';
import data from './data.js';

const imgstyle={
    height: '150px',
    padding : '5px 5px'
}

export default function Badges() {
    return (
        <section id="badges" className="badges">
            <div className="container">
                <div className="section-title">
                    <h2>Check out Badges Earn by Me.</h2>
                    <p>Badges</p>
                </div>
                <div className="text-center">
                    {data.map((d, index) => {
                        return (
                            <a key={index} href={d.url} title={d.name} target="_blank" rel="noreferrer">
                                <img src={d.img} alt={d.name} style={imgstyle} />
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
