import Navbar from '../components/Navbar';
import React, { useState } from 'react';
import piggy from '../assets/piggy.png';


function Home() {
  return (
    <div className="Home">
      <div>
         <Navbar />
       </div>
       <div className="bg-[#053C59] h-screen">
        <div className="justify-center mx-auto flex">
        <img src={piggy} alt="piggy" className="pt-20 w-[400px] h-auto" />

        </div>

      </div>
    </div>
  );
}

export default Home;
