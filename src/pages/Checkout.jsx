import React from 'react'
import { CheckCircle } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
// import Receipt from '../components/Receipt'


const Checkout = () => {
    const navigate = useNavigate()
    return (
        <div className='checkout-page'>
            <CheckCircle size={200} className='icon' />
            <h3>Checkout Successful</h3>
            <p> <em>Disclaimer!!!</em> You did not by any means purchase any item here, <br />this is just a demo website</p>
            <button onClick={() => navigate('/menu')} className='continue'>Continue Shopping</button>
            {/* <Receipt /> */}
        </div>
    )
}

export default Checkout
