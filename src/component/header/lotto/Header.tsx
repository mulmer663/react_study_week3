import React from 'react';
import Logo from "./Logo";
import TopNav from "./TopNav";

/**
 *  번호생성 해더 부분
 */
const Header = () => {
    return (
        <div className="bg-gradient-to-r from-orange-500 to-orange-300">
            <Logo/>
            <TopNav/>
        </div>
    );
};

export default Header;