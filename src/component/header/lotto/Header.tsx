import React from 'react';
import Logo from "./Logo";
import TopNav from "./TopNav";
import TimerArea from "./timer/TimerArea";
import LuckyLotto from "./luckylotto/LuckyLotto";

/**
 *  번호생성 해더 부분
 */
const Header = ({savedNumbers, handleLuckyClick, handleLuckyReset}: {
    savedNumbers: number[],
    handleLuckyClick: (index: number) => void,
    handleLuckyReset: () => void
}) => {
    return (
        <div>
            <Logo/>
            <TopNav/>
            <TimerArea/>
            <LuckyLotto luckyNumbers={savedNumbers} handleBallClick={handleLuckyClick} handleReset={handleLuckyReset}/>
        </div>
    );
};

export default Header;