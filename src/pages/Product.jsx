import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Product = (props) => {
    const { id, foodName, foodImage, price } = props.data
    const navigate = useNavigate()
    const { addToCart } = useContext(ShopContext)

    const handlerToCart = () => {
        addToCart(id)
        toast.success(`${foodName} as been added to cart!!!`, {
            position: "top-center",
        })
    }



    return (
        <>
            <div class="foods-card">
                <small class="priceValue">${price}</small>
                <img src={foodImage} alt={foodName} onClick={() => navigate('/details')} />
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

                    <ToastContainer />


                </div>


            </div>
        </>
    )
}

export default Product
