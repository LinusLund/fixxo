import React from 'react';
import customerService from '../assets/images/customerService.svg';
import creditCard from '../assets/images/creditCard.svg';
import deliveryTruck from '../assets/images/deliveryTruck.svg'


const infoBoxes = () => {
  return (
    <div className = 'boxContainer '>

        <div className = 'infoBox '>
            <button className ='boxLogo'>
                <img src= {customerService} alt="Customer Service" />
            </button>
            <h2 className ='boxHead'>Customer Support</h2>
            <p>village did not remove enjoyed explain talking</p>
        </div>

        <div className = 'infoBox'>
            <button className ='boxLogo'>
                <img src= {creditCard} alt="Customer Service" />
            </button>
            <h2 className ='boxHead'>Secured Payment</h2>
            <p>village did not remove enjoyed explain talking</p>
        </div>

        <div className = 'infoBox'>
            <button className ='boxLogo'>
                <img src= {deliveryTruck} alt="Customer Service" />
            </button>
            <h2 className ='boxHead'>Free Home Delivery</h2>
            <p>village did not remove enjoyed explain talking</p>
        </div>

        <div className = 'infoBox'>
            <button className ='boxLogo'>
                <img src= {deliveryTruck} alt="Customer Service" />
            </button>
            <h2 className ='boxHead'>30 Day Reuters</h2>
            <p>village did not remove enjoyed explain talking</p>
        </div>

    </div>
  )
}

export default infoBoxes