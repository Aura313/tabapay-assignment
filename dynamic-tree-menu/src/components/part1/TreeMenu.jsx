import React, { useEffect, useState } from 'react';
import TreeMenuItem from './TreeMenuItem';
import './Menu.css';
import CustomModal from '../part2/CustomModal';
import axios from 'axios';
// PART 1

/* Initial data for static content
const initialTreeData = [
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
          { name: 'Child Parent B3' },
        ],
      },
    ],
  },
];
 */

const TreeMenu = ({ handleSelectedText }) => {
  const [treeData, setTreeData] = useState([]);
  const [selectedText, setSelectedText] = useState('');
  const [open, setOpen] = useState(false);

  // const [expandedNode, setExpandedNode] = useState('');
  const [expandedNode, setExpandedNode] = useState({ 0: '' }); // Default expanded node for level 0 (root level)

  const handleClose = () => setOpen(false);

  //PART 2
  const manageModal = (newExpandedNode, text, level) => {
    setExpandedNode((prev) => ({ ...prev, [level]: newExpandedNode }));
    // setExpandedNode(newExpandedNode); // Update the expanded node
    const isExpanded = newExpandedNode === text;

    setOpen(isExpanded);
    setSelectedText(text);
    handleSelectedText(text);
  };

  //PART 6

  useEffect(() => {
    axios
      .get('http://localhost:3001/tree')
      .then((response) => {
        setTreeData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching tree data:', error);
      });
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#ececec',
        width: '20%',
        padding: '10px',
      }}
    >
      {/* PART 1 */}
      {treeData.map((rootNode) => (
        <TreeMenuItem
          key={rootNode.id}
          node={rootNode}
          manageModal={manageModal}
          expandedNode={expandedNode}
          level={0} // Root
        />
      ))}
      {/* PART 2 */}
      <CustomModal
        handleClose={handleClose}
        content={selectedText}
        open={open}
      />
    </div>
  );
};

export default TreeMenu;
