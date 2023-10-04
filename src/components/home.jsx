import { restaurant, restaurant_1, restaurant_2 } from '../assets'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { homeBg } from '../Food';


const Home = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        // cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        < div class="hero-page" >
            <Slider {...settings} className='slider'>
               
                {homeBg.map((photo) => (
                    <div key={photo.id}>
                        <img src={photo.img} alt={photo.id} className='home_img' />
                    </div>
                ))}
            </Slider>
            <div class="effect">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className='title'>
                <h1 className="lead">welcome to <span>Sushi</span> Restaurant</h1>
                <p>People eat with their eyes and Sushi creates an easy way for customers to order when they can see beautiful
                    photos
                    of food</p>

                <div className="buttons">
                    <Link to='/menu' className="btn2">sushi foods</Link>
                </div>
            </div>
        </div>
    )
}

export default Home