import React from 'react';
import Navbar from './components/global/Navbar.js';
import HomeSearchbar from './components/home/HomeSearchbar.js';
import Carousel from './components/home/Carousel';


function App() {
  return (
    <div>
      <Navbar/>
      <HomeSearchbar/>
      <Carousel/>
    </div>
  );
}

export default App;
