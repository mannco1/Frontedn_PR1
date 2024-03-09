import React from 'react';
import '../css/Footer.css'
import {NavLink} from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <section className='your_acc'>
        <p className='txt'>Ваш аккаунт<hr color='black'/></p>
        <center><NavLink to='/log' className='link'>Вход</NavLink></center>
      </section>
      <section className='add'>
        <p className='txt'>Дополнительно<hr color='black'/></p>
        <center><a className='link'>Тех. поддержка</a></center>
      </section>
    </footer>
  );
};

export default Footer;
