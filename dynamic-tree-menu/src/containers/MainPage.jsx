import React, { useState } from 'react';
import Header from '../components/part4/Header';
import TreeMenu from '../components/part1/TreeMenu';
import ContentArea from '../components/part3/ContentArea';
import Footer from '../components/part4/Footer';

const MainPage = () => {
  const [selectedText, setSelectedText] = useState('');
  const [selectedNodeId, setSelectedNodeId] = useState('');
  const handleSelectedText = (text, nodeId) => {
    setSelectedText(text);
    setSelectedNodeId(nodeId)
  };

  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <TreeMenu handleSelectedText={handleSelectedText} />
        {/* <div style={{ backgroundColor: 'blue' }}> COntent</div> */}
        <ContentArea heading={selectedText}  selectedNodeId={selectedNodeId}/>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
