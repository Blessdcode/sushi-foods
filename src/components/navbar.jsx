import React, { useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { logo } from '../assets'
import { ShoppingCart, ArrowLeft } from 'phosphor-react'
import { ShopContext } from '../context/shopContext'


const Navbar = (props) => {
  const id = props.data && props.data.id;

  const { getTotalItemCount } = useContext(ShopContext);

  const { cartItems } = useContext(ShopContext)
  const cartItemsAmount = cartItems[id]


  const navigate = useNavigate()
  return (

    <div class="menu-bar">
      <div class="logo" onClick={() => navigate('/')}>
        <img src={logo} alt="logo" className='logo' />
      </div>
      <h1>sushi foods</h1>
      <div class="cart">
        <p  class="sumproducts">
         
        {getTotalItemCount()}
        </p>
        <Link to='/cart'><ShoppingCart size={55} /></Link>
      </div>
    </div>
  )
}

export const Bar = () => {
  return (
    <div class="menu-bar">

      <Link to='/menu'><ArrowLeft size={42} /></Link>
      <div class="cart">
        <h3>Cart Items</h3>

      </div>
    </div>
  )
}


export default Navbar
