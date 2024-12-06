import './App.css';
import React from 'react';
import Footer from './Footer.jsx';
import Card from './Card-point.jsx';
import Appbar from './Appbar.jsx';
import styled from 'styled-components';


function App() {
  return (
    <>
      <Appbar/>
      <Card/>
      <Footer/>
    </>
  );
}

export default App;
