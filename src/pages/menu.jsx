import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import { FOOD } from '../Food';
import Product from './Product';
// import Details from './det';

const Menu = () => {
  const initialVisibleProducts = 6; // Number of products to initially display
  const [visibleProducts, setVisibleProducts] = useState(initialVisibleProducts);
  const [hiddenProducts, setHiddenProducts] = useState(FOOD.length - initialVisibleProducts);

  const loadMoreProducts = () => {
    // Increase the number of products to display
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 3); // Increase by 6 or any desired number
    setHiddenProducts((prevHiddenProducts) => prevHiddenProducts - 3);
  };

  const showLessProducts = () => {
    // Reset the number of products to the initial value
    setVisibleProducts(initialVisibleProducts);
    setHiddenProducts((prevHiddenProducts) => prevHiddenProducts - 3);
  };

  // const [popular, setPopular] = useState([])

  // useEffect(() => {
  //   getPopular()
  // }, [])

  // const getPopular = async () => {

  //   const check = sessionStorage.getItem("popular")

  //   if (check) {
  //     setPopular(JSON.parse(check))
  //   } else {
  //     const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=25`)

  //     const data = await api.json()

  //     sessionStorage.setItem("popular", JSON.stringify(data.recipes))
  //     setPopular(data.recipes)
  //     console.log(data);
  //   }


  return (
    <>
      <Navbar />

      <div className='sushi-foods'>
        <div className='foods-cards'>
          {FOOD.slice(0, visibleProducts).map((food) => (
            <>
              <Product key={food.id} data={food} />
            </>
          ))}
          {/* {popular.map((food) => {
              return (
                <>
                  <Product key={food.id} data={food} />

                </>
              )
            })} */}

        </div>

        {/* {hiddenProducts === 0 && (
          <button onClick={showLessProducts} className='load-more-button'>
            Show Less
          </button>
        )} */}
        {hiddenProducts > 0 && (
          <button onClick={loadMoreProducts} className='load-more-button'>
            Show More
          </button>
        )}
      </div>
    </>
  );
};

export default Menu;
