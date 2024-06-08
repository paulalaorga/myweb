import React from 'react';
import '../styles/Cards.css';
import hug from '../img/hug.png';
import proactive from '../img/proactive.png';
import stretch from '../img/stretch.png';


export default function Cards() {

    return (
<div className="Cards-container">
        <div className="Card">
          <img src={hug} alt='hug' />
          <p>noun.</p>
          <h2>web developer, product designer</h2>
        </div>
        <div className="Card">
          <img src={proactive} alt='proactive' />
          <p>adj.</p>
          <h2>proactive, collaborative, anticipative </h2>
        </div>
        <div className="Card">
          <img src={stretch} alt='stretch' />
          <p>verb.</p>
          <h2>adapt, create, push, advance</h2>
        </div>
      </div>
);
}