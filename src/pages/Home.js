import Navbar from '../components/Navbar';
import React, { useState } from 'react';
import piggy from '../assets/piggy.png';
import coin from '../assets/coin.png';

function Home() {
  const [progress, setProgress] = useState(0);

  const totalMoney = 100; 

  const updateProgress = () => {
    const newProgress = progress + 20;
    if (newProgress <= 100) {
      setProgress(newProgress);
    }
    
  };

  const moneyAmount = (progress / 100) * totalMoney;

  const [popupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!popupVisible);
  };
  
  const [popupVisible2, setPopupVisible2] = useState(false);

  const togglePopup2 = () => {
    setPopupVisible2(!popupVisible2);
  };

  const [popupVisible3, setPopupVisible3] = useState(false);

  const togglePopup3 = () => {
    setPopupVisible3(!popupVisible3);
  };

  const [popupVisible4, setPopupVisible4] = useState(false);

  const togglePopup4 = () => {
    setPopupVisible4(!popupVisible4);
  };

  const [popupVisible5, setPopupVisible5] = useState(false);

  const togglePopup5 = () => {
    setPopupVisible5(!popupVisible5);
  };

  return (
    <div className="Home">
      <div>
        <Navbar />
      </div>
      <div className="bg-[#053C59] h-screen">
        <div className="justify-center mx-auto flex flex-col items-center">
          <img src={piggy} alt="piggy" className="pt-20 w-[500px] h-auto" />

          <div className="w-[400px] h-7 bg-gray-200 mt-4 rounded-full">
            <div
              className="animate-pulse h-full bg-[#D22C27] rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <p className="mt-2 text-white">{`Amount: $${moneyAmount.toFixed(2)}`}</p>


        
        <div className="flex justify-center items-center">


        <button onClick={togglePopup} className="focus:outline-none">
            <img src={coin} alt="coin" className="m-4 pt-20 w-[125px] h-auto animate-pulse" />
            <h1 className="text-white text-[25px]">Task 1</h1>
        </button>
        {popupVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-md">
            <p>This is the first popup</p>
            <button onClick={() => { togglePopup(); updateProgress(); }}>Finish</button>
          </div>
        </div>
        )}


        <button onClick={togglePopup2} className="focus:outline-none">
            <img src={coin} alt="coin" className="m-4 pt-20 w-[125px] h-auto animate-pulse" />
            <h1 className="text-white text-[25px]">Task 2</h1>
        </button>
        {popupVisible2 && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-md">
            <p>This is the second popup</p>
            <button onClick={() => { togglePopup2(); updateProgress(); }}>Finish</button>
          </div>
        </div>
        )}


        <button onClick={togglePopup3} className="focus:outline-none">
            <img src={coin} alt="coin" className="m-4 pt-20 w-[125px] h-auto animate-pulse" />
            <h1 className="text-white text-[25px]">Task 3</h1>
        </button>
        {popupVisible3 && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-md">
            <p>This is the third popup</p>
            <button onClick={() => { togglePopup3(); updateProgress(); }}>Finish</button>
          </div>
        </div>
        )}

        <button onClick={togglePopup4} className="focus:outline-none">
            <img src={coin} alt="coin" className="m-4 pt-20 w-[125px] h-auto animate-pulse" />
            <h1 className="text-white text-[25px]">Task 4</h1>
        </button>
        {popupVisible4 && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-md">
            <p>This is the fourth popup</p>
            <button onClick={() => { togglePopup4(); updateProgress(); }}>Finish</button>
          </div>
        </div>
        )}

        <button onClick={togglePopup5} className="focus:outline-none">
            <img src={coin} alt="coin" className="m-4 pt-20 w-[125px] h-auto animate-pulse" />
            <h1 className="text-white text-[25px]">Task 5</h1>
        </button>
        {popupVisible5 && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-md">
            <p>This is the fifth popup</p>
            <button onClick={() => { togglePopup5(); updateProgress(); }}>Finish</button>
          </div>
        </div>
        )}

        
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
