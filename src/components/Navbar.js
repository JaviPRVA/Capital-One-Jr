import React from 'react';
import COjr from '../assets/COjr.png';

const Navbar = () => {
    return (
        <nav className=" bg-navbar-gradien p-4 text-white">
            <div className="justify-center flex items-center">
                <img src={COjr} alt="logo" className="mr-10 pl-5 w-[200px] h-auto" />
                <h1 className="text-black ml-10 text-[30px]">Digital Piggy Bank</h1>
            </div>
        </nav>
    );
};

export default Navbar;
