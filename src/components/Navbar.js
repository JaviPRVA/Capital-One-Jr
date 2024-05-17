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
                <a href="https://www.capitalone.com/credit-cards/preapprove/lp/sem/lp2/?external_id=WWW_LPT118_ZZZ_ONL-SE_ZZZZZ_T_SEM2_ZZZZ_c_Zg_b37b525f-0c1a-4556-981c-e54ca377831f_672014312523_662461&target_id=kwd-10051861&oC=CO5ed2SUs1&gad_source=1&gclid=Cj0KCQjw3ZayBhDRARIsAPWzx8oGgVGKvScZcEzXovZKZD3iykp5Qy09TLLjIahrb880RkrOUkGBHj4aAhwGEALw_wcB" target="_blank" rel="noopener noreferrer" className="text-[#D22C27] font-bold ml-10 text-[30px] pr-8">Credit Cards</a>
                <Link to="/Quiz" className="text-[#D22C27] font-bold ml-10 text-[30px] pr-8">Test Your Knowledge</Link>
                <Link to="/Mission" className="text-[#D22C27] font-bold ml-10 text-[30px] pr-8">Our Mission</Link>
            </div>
        </nav>
    );
};

export default Navbar;
