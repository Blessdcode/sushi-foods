import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'


export const CartItem = (props) => {
    const { cartItems, addToCart, removeCart, updateCartItem, getTotalAmount } = useContext(ShopContext)
    const { id, price, foodImage, foodName } = props.data
    const itemTotalPrice = cartItems[id] * price;


    return (
        <div>
            
            <div className='top-cart' >
                <div className="cart-det">
                    <div class="cart-det-box">
                        <img src={foodImage} alt={foodName} class="cart-img" />
                        <div class="food-name">
                            <h4>{foodName}</h4>
                            <p>${itemTotalPrice.toFixed(2)}</p>
                        </div>

                        <div class="increment">
                            <button class="plus" onClick={() => addToCart(id)}>+</button>

                            <input value={cartItems[id]} onChange={(e) => updateCartItem(Number(e.target.value), id)} />

                            <button class="minus" onClick={() => removeCart(id)}>-</button>
                        </div>

                    </div>

                </div>


            </div>


        </div>
    )
}


