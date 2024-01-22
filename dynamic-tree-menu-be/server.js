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
    name: 'Root',
    children: [
      {
        name: 'Parent A',
        children: [
          { name: 'Child A1' },
          {
            name: 'Child Parent A2',
            children: [{ name: 'Child A21' }, { name: 'Child A22' }],
          },
        ],
      },
      {
        name: 'Parent B',
        children: [
          { name: 'Child B1' },
          { name: 'Child B2' },
          {
            name: 'Child Parent B3',
            children: [{ name: 'Child B31' }, { name: 'Child B32' }],
          },
        ],
      },
    ],
  },
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
    name: 'Category 1',
    content:
      'Category 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.',
  },
  {
    name: 'Category 2',
    content:
      'Category 2 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.',
  },
  {
    name: 'Category 3',
    content:
      'Category 3 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.',
  },
  {
    name: 'Category 4',
    content:
      'Category 4 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.',
  },
  {
    name: 'Category 5',
    content:
      'Category 5 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.',
  },
  {
    name: 'Category 6',
    content:
      'Category 6 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.',
  },
  {
    name: 'Category 7',
    content:
      'Category 7 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.',
  },
  {
    name: 'Category 8',
    content:
      'Category 7 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.',
  },
  {
    name: 'Category 9',
    content:
      'Category 7 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.',
  },
  {
    name: 'Category 10',
    content:
      'Category 7 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.',
  },
  {
    name: 'Category 11',
    content:
      'Category 7 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.',
  },
  {
    name: 'Category 8',
    content:
      'Category 7 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.',
  },
  {
    name: 'Category 9',
    content:
      'Category 7 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.',
  },
  {
    name: 'Category 10',
    content:
      'Category 7 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.',
  },
  {
    name: 'Category 11',
    content:
      'Category 7 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.',
  },
  {
    name: 'Category 8',
    content:
      'Category 7 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.',
  },
  {
    name: 'Category 9',
    content:
      'Category 7 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.',
  },
  {
    name: 'Category 10',
    content:
      'Category 7 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.',
  },
  {
    name: 'Category 11',
    content:
      'Category 7 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.',
  },
  {
    name: 'Category 8',
    content:
      'Category 7 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.',
  },
  {
    name: 'Category 9',
    content:
      'Category 7 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.',
  },
  {
    name: 'Category 10',
    content:
      'Category 7 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.',
  },
  {
    name: 'Category 11',
    content:
      'Category 7 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.',
  },
  {
    name: 'Category n',
    content:
      'Category n : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis sed tortor vitae molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pretium tempor tellus vitae rhoncus. Nulla ante quam, mattis in viverra ut, tincidunt non diam. Nam sagittis sagittis semper. Vivamus ut blandit ligula, et pulvinar nisi. Praesent luctus, nisl at facilisis euismod, dolor dui pharetra justo, et interdum dui leo eget velit. Nam sodales nibh a est ornare gravida.',
  },
];

app.get('/categories', (req, res) => {
  res.json(categoriesData);
});

// Additional endpoints for updating categories, etc.
