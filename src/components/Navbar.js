import React from 'react';
import COjr from '../assets/COjr.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-navbar-gradient p-4 text-white flex items-center">
            <div className="flex items-center">
                <img src={COjr} alt="logo" className="mr-10 pl-5 w-[200px] h-auto" />
            </div>
            <div className="flex justify-end flex-1">
             <Link to="/" className="text-[#D22C27] font-bold ml-10 text-[30px] pr-8">Home</Link>
             <Link to="/" className="text-[#D22C27] font-bold ml-10 text-[30px] pr-8">Credit Cards</Link>
             <Link to="/Quiz" className="text-[#D22C27] font-bold ml-10 text-[30px] pr-8">Test Your Knowledge</Link>
             <Link to="/" className="text-[#D22C27] font-bold ml-10 text-[30px] pr-8">Our Mission</Link>
            </div>
        </nav>

    );
};

export default Navbar;
