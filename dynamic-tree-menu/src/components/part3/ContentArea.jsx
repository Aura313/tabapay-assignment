import React from 'react';
import Categories from '../part5/Categories';
import Typography from '@mui/material/Typography';
import './ContentArea.css';

//Part 3 & Part 5 : Area to Represent the clicked Tree Item & Categories

const ContentArea = ({ heading, selectedNodeId }) => {
  return (
    <div className='content-area-wrapper'>
      {heading ? (
        <h1> {heading}</h1>
      ) : (
        <Typography variant='body2' color='text.secondary'>
          {' '}
          Select Menu Items to display data...
        </Typography>
      )}
      <Categories selectedNodeId={selectedNodeId} />
    </div>
  );
};

export default ContentArea;
