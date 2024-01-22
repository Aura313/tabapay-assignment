import React from 'react';
import Categories from '../part5/Categories';

import './ContentArea.css';

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
