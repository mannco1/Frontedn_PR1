import React from 'react';
import styled from 'styled-components';
import Header from '../elements/Header.jsx';
import Footer from '../elements/Footer.jsx';
import Validation from '../Validation.jsx';
// import '../css/index.css';
import '../css/Log.css'


function Log() {
  return (
    <div>
      <Header/>
      <Validation/>
      <Footer/>
    </div>
  )
    ;
}

export default Log;
