import React, { useState } from 'react';
import Navbar from '../components/navbar';
import { FOOD } from '../Food';
import Product from './Product';

const Menu = () => {
  const [visibleProducts, setVisibleProducts] = useState(6); // Number of products to initially display

  const loadMoreProducts = () => {
    // Increase the number of products to display
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 6); // Increase by 6 or any desired number
  };

  return (
    <>
      <Navbar />

      <div className='sushi-foods'>
        <div className='foods-cards'>
          {FOOD.slice(0, visibleProducts).map((food) => (
            <Product key={food.id} data={food} />
          ))}
        </div>

        {visibleProducts < FOOD.length && (
          <button onClick={loadMoreProducts} className='load-more-button'>
            Load More
          </button>
        )}
      </div>
    </>
  );
};

export default Menu;
