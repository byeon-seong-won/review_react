import './App.css';
import React from 'react';
import Footer from './Footer.jsx';
import PointCard from './PointCard.jsx';
import CampaignCard from './CampaignCard.jsx';
import Selectbox from './Selectbox.jsx';
import CampaignTitleBar from './CampaignTitleBar.jsx';
import DefaultTitleBar from './DefaultTitleBar.jsx';
import Tooltip from './Tooltip.jsx';
import Chip from './Chip.jsx';
import Navbar from './Navbar.jsx';
import Snackbar from './Snackbar.jsx';
import SubTItleBar from './SubTItleBar.jsx';
import Faqlist from './Faqlist.jsx';
import AnnounceList from './Announcelist.jsx';
import Notifylist from './Notifylist.jsx';


function App() {
  return (
    <>
      <Notifylist/>
      <AnnounceList/>
      <Faqlist/>
      <SubTItleBar/>
      <Snackbar/>
      <Chip/>
      <Tooltip/>
      <DefaultTitleBar/>
      <CampaignTitleBar/>
      <PointCard/>
      <CampaignCard/>
      <Selectbox/>
      <Footer/>
      <Navbar/>
    </>
  );
}

export default App;
