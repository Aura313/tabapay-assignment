import React from "react";
import './Menu.css';
const TreeMenuItem = ({ node, manageModal, expandedNode, level }) => {
    const isExpanded = expandedNode[level] === node.name;
    const handleToggle = () => {
      const newExpandedState = !isExpanded ? node.name : '';
      
      //PART 2
      manageModal(newExpandedState, node.name, level);
    };
  
    return (
      <div className="menu-item" >
        {node?.children?.length > 0 ? (
          <div
            onClick={handleToggle}
          >
            {isExpanded && node.children.length > 0 ? '▼' : '►'} {node.name}
          </div>
        ) : (
          <div>
            <input type='radio' checked readOnly /> {node.name}
          </div>
        )}
        {isExpanded && (
          <ul>
            {node.children.map((childNode) => (
              <li key={childNode.id}>
                <TreeMenuItem
                  node={childNode}
                  manageModal={manageModal}
                  expandedNode={expandedNode}
                  level={level + 1}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  export default TreeMenuItem;