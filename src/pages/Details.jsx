import React from 'react'
import { not_found_1, not_found_2 } from '../assets'
import { House } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'


const Details = () => {
    const navigate = useNavigate()
    return (
        <div className='not_found'>
            <h3>Sorry, page not found!!!</h3>
            <img src={not_found_2} alt="not_found" />
            <div className='flex'>
            <House size={48} className='home' 
            onClick={() => navigate('/menu')}
            aria-label='Home'
            aria-details='Home'
            />
            </div>
        </div>
    )
}

export default Details
