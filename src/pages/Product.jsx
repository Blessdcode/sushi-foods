import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/shopContext';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = (props) => {
    const { id, foodName, foodImage, price } = props.data;
    const navigate = useNavigate();
    const { addToCart } = useContext(ShopContext);

    const handlerToCart = () => {
        addToCart(id);
        toast.success(`${foodName} has been added to the cart!!!`, {
            position: "top-center",
        });
    };

    return (
        <div className="foods-card">
            <small className="priceValue">${price}</small>
            <img src={foodImage} alt={foodName} onClick={() => navigate('/details')} />
            <div className="food-details">
                <div>
                    <h4 className="det">{foodName}</h4>
                </div>
                <button
                    className="to-cart"
                    onClick={handlerToCart}
                    style={{
                        color: 'hsl(0, 0%, 95%)',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        borderRadius: '8px',
                    }}
                >
                    Add to cart
                </button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Product;
