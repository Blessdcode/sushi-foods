import { restaurant } from '../assets'
import { Link } from 'react-router-dom'


const Home = () => {

    return (
        < div class="hero-page" >
            <img src={restaurant} alt='home img' className='home_img' />
            <div class="effect">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <h1 class="lead">welcome to <span>Sushi</span> Restaurant</h1>
            <p>People eat with their eyes and Sushi creates an easy way for customers to order when they can see beautiful
                photos
                of food</p>

            <div class="buttons">
                <Link to='/menu' class="btn2">sushi foods</Link>
            </div>
        </div>
    )
}

export default Home