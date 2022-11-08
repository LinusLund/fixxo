import React from 'react'
import PamelaContour from '../assets/images/PamelaContour.svg';
import GirlPosing from '../assets/images/GirlPosing.svg';




const PamelaSection = () => {
  return (
    <div>
        <section className = 'container'>
          <div className ='img-showcase'>
            <div className = 'pamelaPick'>
                <img src= {PamelaContour} alt="Pamela looking pleased with herself" />
                <h1 className = 'pamela_Picks'>Pamela Reif's Top Picks</h1>
                <button className = 'PamelaBtn' type='submit'><span className="top-left"></span>Shop Now<span className = "bottom-right"></span></button>
            </div>

            <div className = 'conscious'>
                <img src= {GirlPosing} alt="Girl happy shop at our sale"/>
                <h1 className = 'img_headline'> Let's Be Conscious</h1>
                <button className = 'flash_sale' type='submit'><span className="top-left"></span>Flash Sale<span className = "bottom-right"></span></button>
            </div>
          </div>
        </section>
    </div>
  )
}

export default PamelaSection