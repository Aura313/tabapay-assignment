import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CustomModal from '../part2/CustomModal';
import axios from 'axios';
import '../part3/ContentArea.css';

// PART 5
/*
Initial data for static content

const initialCategoriesData = [
  { name: 'Category 1', content: 'Category 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.' },
  { name: 'Category 2', content: 'Category 2 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.' },
  { name: 'Category 3', content: 'Category 3 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.' },
  { name: 'Category 4', content: 'Category 4 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.' },
  { name: 'Category 5', content: 'Category 5 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.' },
  { name: 'Category 6', content: 'Category 6 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.' },
  { name: 'Category 7', content: 'Category 7 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.' },
  { name: 'Category 7', content: 'Category 7 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.' },
  { name: 'Category n', content: 'Category n : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.' },
];
 */

const Categories = ({ selectedNodeId }) => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedText, setSelectedText] = useState('');
  const handleOpen = (content) => {
    setSelectedText(content);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  //PART 6 : Fetching categories from the API
  useEffect(() => {
    if (selectedNodeId) {
      axios
        .get(`http://localhost:3001/categories/${selectedNodeId}`)
        .then((response) => {
          setCategoriesData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching tree data:', error);
        });
    }
  }, [selectedNodeId]);

  console.log(selectedNodeId, 'selectedNodeIdselectedNodeIdselectedNodeId');
  // PART 5 & 6
  return (
    <>
      <div className='categories-wrapper'>
        {categoriesData.map((category) => (
          <Card sx={{ width: 345, margin: '10px', marginRight: '20px' }}>
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {category.name}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                <b>{category.name}</b>: {category.content.slice(0, 100)}...
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => handleOpen(category.content)}>
                Show more
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
      <CustomModal
        handleClose={handleClose}
        content={selectedText}
        open={open}
      />
    </>
  );
};

export default Categories;
