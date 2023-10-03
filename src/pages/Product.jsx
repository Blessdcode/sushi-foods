import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'


const Product = (props) => {
    const { id, foodName, foodImage, price } = props.data

    const { addToCart } = useContext(ShopContext)
    const navigate = useNavigate()

    const handlerToCart = () => {
        addToCart(id)
        window.alert(`${foodName} as been added to cart!!!`)
    }



    return (
        <>
            <div class="foods-card">
                <small class="priceValue">${price}</small>
                <img src={foodImage} alt={foodName} />
                <div class="food-details">
                    <div class="">
                        <h4 class="det">{foodName}</h4>
                    </div>
                    {/* <div class="to-cart" >
                        <p>Add to cart</p>
                    </div> */}

                    <button className='to-cart' onClick={handlerToCart}>
                        Add to cart
                    </button>

                </div>


            </div>
        </>
    )
}

export default Product
