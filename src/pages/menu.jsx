import React from 'react'
// import Navbar from '../components/navbar'
import Navbar, { Bar } from '../components/navbar'
import { FOOD } from '../Food'
import Product from './Product'


const Menu = () => {
    return (
        <>
            <Navbar />

            <div className='sushi-foods'>
                <div className='foods-cards'>

                    {FOOD.map((food) => (
                        <Product data={food} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Menu

