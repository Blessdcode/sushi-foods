import React, { useState } from 'react';
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
