import './App.css';
import React from 'react';
import Footer from './Footer.jsx';
import Card from './Card-point.jsx';
import Selectbox from './Selectbox.jsx';
import CampaignTitleBar from './CampaignTitleBar.jsx';
import DefaultTitleBar from './DefaultTitleBar.jsx';
import Tooltip from './Tooltip.jsx';
import Chip from './Chip.jsx';
import Navbar from './Navbar.jsx';


function App() {
  return (
    <>
      <Chip/>
      <Tooltip/>
      <DefaultTitleBar/>
      <CampaignTitleBar/>
      <Card/>
      <Selectbox/>
      <Footer/>
      <Navbar/>
    </>
  );
}

export default App;
