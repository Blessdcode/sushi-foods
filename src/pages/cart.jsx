import React, { useContext } from 'react'
import { Bar } from '../components/navbar'
import { ShopContext } from '../context/shopContext'
import { FOOD } from '../Food'
import { CartItem } from './Cartitem'
import { useNavigate } from 'react-router-dom'



const Cart = () => {
  const { cartItems, getTotalAmount } = useContext(ShopContext)
  const totalAmount = getTotalAmount()

  const navigate = useNavigate()
  return (
    <div>
      <Bar />

      <div className="cart-box">
        {FOOD.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />
          }
        })}
      </div>
      <div className='total-amount'>
      {totalAmount > 0 ? (
        <>
          <div className="total">
            <h1>Total: <span className="amount"> ${totalAmount.toFixed(2)}</span></h1>
          </div>
          <button onClick={() => navigate('/cart')} className='continue'>Continue Shopping</button>
          <button className="checkout hidden"  onClick={() => navigate('/checkout')}>checkout</button>
        </>
      ) : (
        <h2>Your cart is Empty</h2>
      )}
      </div>
    </div >
  )
}



export default Cart
