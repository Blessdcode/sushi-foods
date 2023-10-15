import React from 'react'
import { Bar } from '../components/navbar';

const Details = (props) => {
    const { id, price, foodImage, foodName } = props.data
    return (
        <div>
            <Bar title="Food details" />

            <div>
                <div className='top-cart' >
                    <div className="cart-det">
                        <div class="cart-det-box">
                            <img src={foodImage} alt={foodName} class="cart-img" />
                            <div class="food-name">
                                <h4>{foodName}</h4>
                             
                            </div>

                            

                        </div>
                    </div>

                </div>


            </div>

        </div>
    )
}

export default Details
