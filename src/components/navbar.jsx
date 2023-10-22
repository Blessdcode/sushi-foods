import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { logo } from '../assets';
import { ShoppingCart, ArrowLeft } from 'phosphor-react';
import { ShopContext } from '../context/shopContext';

const Navbar = (props) => {
    // State to track when an item is added to the cart
    const [itemAddedToCart, setItemAddedToCart] = useState(false);

    // useEffect to reset the itemAddedToCart state after a delay
    useEffect(() => {
        if (itemAddedToCart) {
            // Set itemAddedToCart to false after 2 seconds (you can adjust the delay)
            const timeout = setTimeout(() => {
                setItemAddedToCart(false);
            }, 2000);
            return () => clearTimeout(timeout);
        }
    }, [itemAddedToCart]);

    const id = props.data && props.data.id;

    const { getTotalItemCount } = useContext(ShopContext);

    const { cartItems } = useContext(ShopContext);
    const cartItemsAmount = cartItems[id];

    const navigate = useNavigate();

    return (
        <div className="menu-bar">
            <div className="logo" onClick={() => navigate('/')}>
                <img src={logo} alt="logo" className='logo' />
            </div>
            <h1>sushi foods</h1>
            <div className={`cart ${itemAddedToCart ? 'cart-animation' : ''}`}>
                <p className="sumproducts">
                    {getTotalItemCount()}
                </p>
                <Link to='/cart'>
                    <ShoppingCart size={55} />
                </Link>
            </div>
        </div>
    );
}

export const Bar = (props) => {
    return (
        <div className="menu-bar">
            <Link to='/menu'><ArrowLeft size={42} /></Link>
            <div className="cart">
                <h3>{props.name}</h3>
                <h3>{props.title}</h3>
            </div>
        </div>
    )
}

export default Navbar;
