import React, { useState } from 'react';
import img_1 from '../assets/images/img-1.svg'
import img_2 from '../assets/images/img-2.svg'
import ShopButton from './ShopButton';

const Showcase = () => {
  return (
    <section className = "__Showcase">
        <div className = "container">
            <img className = "one_fr" src={img_1} alt='womanOnChair'/>
            <div className = "one_fr">        
            <div className="textbuttonbox">
                <h1> SALE UP To 50% Off</h1>
                <p>Online shopping free home delivery over 100$</p>
                <ShopButton></ShopButton>
            </div>
            </div>
            <img className = "one_fr" src={img_2} alt='ManWithPockets'/>
        </div>
    </section>
  )
}

export default Showcase