import React from 'react';
import Logo from "./Logo";
import TopNav from "./TopNav";

const Header = () => {
    return (
        <div className="bg-gradient-to-r from-orange-500 to-orange-300">
            <Logo/>
            <TopNav/>
        </div>
    );
};

export default Header;