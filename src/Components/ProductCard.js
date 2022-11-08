import React from 'react'
import { NavLink } from 'react-router-dom'




const ProductCard = ({product}) => {

 
  return (

    <div className="col ">
        <div className="card">
            <div className="img">
                <img src={product.imageName} alt= {product.name} />
                <div className="card-menu">
                    <button  className = 'menu-link'><i className="fa-regular fa-code-compare"></i></button>
                    <button  className = 'menu-link'><i className="fa-regular fa-heart"></i></button>
                    <button  className = 'menu-link'><i className="fa-regular fa-bag-shopping"></i></button>
                </div>

                <NavLink to={`/products/${product.name.toLowerCase().replace(/ /gi,"-")}`} className="QuickButton">
                    <span className="top-left"></span>
                    <span className="bottom-right"></span>
                    Quick View
                </NavLink>
          
            </div>
            <div className="card-body">
                <p className="card-text">{product.category}</p>
                <h5 className="card-title">{product.name}</h5>
                <p className="card-stars">

                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    
                </p>
                <p className="card-price">${product.price}</p>
                
            </div>
        </div>
    </div>
  )
}



export default ProductCard