// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import PostList from '../PostList.jsx'
import Header from '../elements/Header.jsx'
import Footer from '../elements/Footer.jsx'

function Home() {
  return <div>
   <Header />
      <PostList />
      <Footer />
  </div>;
}

export default Home;
