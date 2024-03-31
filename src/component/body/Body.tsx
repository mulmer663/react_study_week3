import React from 'react';
import TimerArea from "./timer/TimerArea";
import LuckyLotto from "./luckylotto/LuckyLotto";
import DrawLotto from "./drawlotto/DrawLotto";

const Body = () => {
    return (
        <div className='h-full flex flex-col justify-start'>
            <TimerArea/>
            <LuckyLotto/>
            <DrawLotto/>
        </div>
    );
};

export default Body;