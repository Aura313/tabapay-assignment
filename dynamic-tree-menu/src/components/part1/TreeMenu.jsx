import React, { useEffect, useState } from 'react';
import TreeMenuItem from './TreeMenuItem';

import CustomModal from '../part2/CustomModal';
import axios from 'axios';

import './Tree.css'
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
  const [expandedNode, setExpandedNode] = useState({ 0: '' });

  /**
   * PART 2 - Manage Modal State
   */
  const manageModal = (newExpandedNode, text, level, nodeId) => {
    setExpandedNode((prev) => ({ ...prev, [level]: newExpandedNode }));
    const isExpanded = newExpandedNode === text;
    setOpen(isExpanded);
    setSelectedText(text);
    handleSelectedText(text, nodeId);
  };

  const handleClose = () => setOpen(false);

  //PART 6 : Fetch tree data from the API on component mount

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
    <div className='menu-wrapper'>
      {/*  PART 1 : Render the tree structure recursively using TreeMenuItem components */}
      {treeData.map((rootNode) => (
        <TreeMenuItem
          key={rootNode.id}
          node={rootNode}
          manageModal={manageModal}
          expandedNode={expandedNode}
          level={0} // Root
        />
      ))}
      {/* PART 2 : Modal component to display the selected tree item */}
      <CustomModal
        handleClose={handleClose}
        content={selectedText}
        open={open}
      />
    </div>
  );
};

export default TreeMenu;
