import React from 'react';
import COjr from '../assets/COjr.png';

const Navbar = () => {
    return (
        <nav className="bg-navbar-gradien p-4 text-white">
            <div>
                <img src={COjr} alt="logo" className="pl-5 w-[200px] h-auto" />

            </div>
        </nav>
    );
};

export default Navbar;
