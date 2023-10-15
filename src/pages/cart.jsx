import React, { useContext } from 'react';
import { Bar } from '../components/navbar';
import { ShopContext } from '../context/shopContext';
import { FOOD } from '../Food';
import { CartItem } from './Cartitem';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, getTotalAmount, updateCartItem } = useContext(ShopContext);
  const totalAmount = getTotalAmount();
  const navigate = useNavigate();

  const handleCheckout = () => {
    // Clear the cart by setting the quantity of all items to 0
    for (const item in cartItems) {
      updateCartItem(0, item);
    }
    // You can also clear the cart from local storage if needed
    localStorage.removeItem('cart');
    // Navigate to the checkout page
    navigate('/checkout');
  };

  return (
    <div>
      <Bar name="Cart Items"/>
      <div className="cart-box">
        {FOOD.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </div>
      <div className='total-amount'>
        {totalAmount > 0 ? (
          <>
            <div className="total">
              <h1>Total: <span className="amount"> ${totalAmount.toFixed(2)}</span></h1>
            </div>
            <button onClick={() => navigate('/menu')} className='continue'>Continue Shopping</button>
            <button className="checkout hidden" onClick={handleCheckout}>Checkout</button>
          </>
        ) : (
          <h2>Your cart is Empty</h2>
        )}
      </div>
    </div>
  );
};

export default Cart;
