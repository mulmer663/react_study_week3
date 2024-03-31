import React from 'react';
import TimerArea from "./timer/TimerArea";
import LuckyLotto from "./luckylotto/LuckyLotto";
import DrawLotto from "./drawlotto/DrawLotto";

/**
 * 몸톰 컴포넌트
 * 일단 타이머, 럭키 숫자뽑기, 로또만들기 3개를 가지고 있다
 */
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