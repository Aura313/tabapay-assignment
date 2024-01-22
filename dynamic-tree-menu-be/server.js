const express = require('express');
const app = express();
const port = 3001;

const cors = require('cors');
app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

let treeData = [
  {
    id: 'root', // unique identifier
    name: 'Root',
    children: [ // array of children nodes
      {
        id: 'parent-a',
        name: 'Parent A',
        children: [
          { id: 'child-a1', name: 'Child A1' },
          {
            id: 'child-parent-a2',
            name: 'Child Parent A2',
            children: [
              { id: 'child-a21', name: 'Child A21' },
              { id: 'child-a22', name: 'Child A22' }
            ]
          }
        ]
      },
      {
        id: 'parent-b',
        name: 'Parent B',
        children: [
          { id: 'child-b1', name: 'Child B1' },
          { id: 'child-b2', name: 'Child B2' },
          {
            id: 'child-parent-b3',
            name: 'Child Parent B3',
            children: [
              { id: 'child-b31', name: 'Child B31' },
              { id: 'child-b32', name: 'Child B32' }
            ]
          }
        ]
      }
    ]
  }
];


app.get('/tree', (req, res) => {
  res.json(treeData);
});

app.post('/tree', (req, res) => {
  // Logic to modify tree data
  res.json({ message: 'Tree updated' });
});

let categoriesData = [
  {
    id: 'category-1',
    name: 'Category 1',
    treeNodeId: 'parent-a',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.'
  },
  
  {
    id: 'category-2',
    name: 'Category 2',
    treeNodeId: 'child-a1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.'
  },
  {
    id: 'category-12',
    name: 'Category 12',
    treeNodeId: 'root',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.'
  },
  {
    id: 'category-13',
    name: 'Category 13',
    treeNodeId: 'parent-a',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.'
  },
  {
    id: 'category-27',
    name: 'Category 27',
    treeNodeId: 'parent-a',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.'
  },
  {
    id: 'category-311',
    name: 'Category 311',
    treeNodeId: 'child-a21',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.'
  },
  {
    id: 'category-411',
    name: 'Category 411',
    treeNodeId: 'child-a21',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.'
  },
  {
    id: 'category-511',
    name: 'Category 511',
    treeNodeId: 'child-a21',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.'
  },
  {
    id: 'category-611',
    name: 'Category 611',
    treeNodeId: 'child-a21',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.'
  },
  {
    id: 'category-3',
    name: 'Category 3',
    treeNodeId: 'child-a21',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.'
  },
  {
    id: 'category-4',
    name: 'Category 4',
    treeNodeId: 'child-a22',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.'
  },
  {
    id: 'category-5',
    name: 'Category 5',
    treeNodeId: 'parent-b',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.'
  },
  {
    id: 'category-6',
    name: 'Category 6',
    treeNodeId: 'child-b1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.'
  },
  {
    id: 'category-7',
    name: 'Category 7',
    treeNodeId: 'child-b31',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.'
  },
  {
    id: 'category-8',
    name: 'Category 8',
    treeNodeId: 'child-b32',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.'
  },
  {
    id: 'category-9',
    name: 'Category 9',
    treeNodeId: 'child-parent-a2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.'
  },
  {
    id: 'category-10',
    name: 'Category 10',
    treeNodeId: 'child-parent-b3',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.'
  },
  {
    id: 'category-11',
    name: 'Category 11',
    treeNodeId: 'child-b2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.'
  },
  {
    id: 'category-20',
    name: 'Category 20',
    treeNodeId: 'root',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.'
  },
  {
    id: 'category-13',
    name: 'Category 13',
    treeNodeId: 'parent-a',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.'
  },
  {
    id: 'category-21',
    name: 'Category 21',
    treeNodeId: 'parent-a',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.'
  },
  {
    id: 'category-36',
    name: 'Category 36',
    treeNodeId: 'parent-a',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.'
  },
  {
    id: 'category-41',
    name: 'Category 41',
    treeNodeId: 'parent-a',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.'
  },
  {
    id: 'category-51',
    name: 'Category 51',
    treeNodeId: 'parent-a',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.'
  },
  {
    id: 'category-61',
    name: 'Category 61',
    treeNodeId: 'parent-b',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.'
  },
  {
    id: 'category-15',
    name: 'Category 15',
    treeNodeId: 'root',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.'
  },
  {
    id: 'category-16',
    name: 'Category 16',
    treeNodeId: 'root',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.'
  },
  {
    id: 'category-17',
    name: 'Category 17',
    treeNodeId: 'root',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.'
  },
  {
    id: 'category-18',
    name: 'Category 18',
    treeNodeId: 'root',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.'
  },


];


app.get('/categories', (req, res) => {
  res.json(categoriesData);
});

app.get('/categories/:menuItemId', (req, res) => {
  // Extract the menuItemId from the request parameters
  const { menuItemId } = req.params;
  // Filter categories based on the menuItemId
  const filteredCategories = categoriesData.filter(
    category => category.treeNodeId === menuItemId
  );
  
  res.json(filteredCategories);
});

// Additional endpoints for updating categories, etc.
