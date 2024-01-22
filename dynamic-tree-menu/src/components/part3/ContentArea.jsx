import React from 'react';
import Categories from '../part5/Categories';

import './ContentArea.css';

//Part 3 & Part 5 : Area to Represent the clicked Tree Item & Categories


const ContentArea = ({ heading }) => {
  return (
    <div
      className='categories'
    >
      {heading && <h1> {heading}</h1>}
      <Categories />
    </div>
  );
};

export default ContentArea;
