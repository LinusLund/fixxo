import React from 'react'
import { NavLink } from 'react-router-dom'




const ProductCard = ({product}) => {

    const addToWishList = (e) => {
        console.log (`${e.product}added to wish list`)
    }

    const addToCompare = (e) => {
        console.log ("added to Compare list")
    }

    const addToCart = (e) => {
        console.log ("added to Shopping Cart")
    }

  return (

    <div className="col">
        <div className="card">
            <div className="img">
                <img src={product.img} alt= {product.name} />
                <div className="card-menu">
                    <button onClick={addToCompare} className = 'menu-link'><i className="fa-regular fa-code-compare"></i></button>
                    <button onClick={addToWishList(product.id)} className = 'menu-link'><i className="fa-regular fa-heart"></i></button>
                    <button onClick={addToCart} className = 'menu-link'><i className="fa-regular fa-bag-shopping"></i></button>
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
                <p className="card-price">{product.price}</p>
                
            </div>
        </div>
    </div>
  )
}



export default ProductCard