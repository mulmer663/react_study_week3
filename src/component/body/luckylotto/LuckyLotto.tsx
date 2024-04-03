import React from 'react';
import ResetButton from "../../../common/atom/ResetButton";
import SixBalls from "../../../common/molecules/SixBalls";

/**
 * 럭키 번호 추첨 컴포넌트
 */
const LuckyLotto = ({luckyNumbers: numbers, handleBallClick, handleReset}: {
    luckyNumbers: number[],
    handleBallClick: (index: number) => void,
    handleReset: () => void
}) => {

    return (
        <div className="flex h-16 flex-row items-center justify-between">
            <div className="ml-1 flex h-5/6 flex-col justify-around gap-1.5 hover:cursor-grab active:cursor-grabbing">
                <div className='h-1/2 bg-orange-500 w-[3px] sm:w-2'></div>
                <div className='h-1/2 bg-gray-200 w-[3px] sm:w-2'></div>
            </div>
            <div className='hover:cursor-grab active:cursor-grabbing sm:flex'>
                <p className='text-xs font-semibold text-gray-600 font-noto-sans sm:pr-2 sm:text-base'>LUCKY</p>
                <p className='text-xs text-gray-600 font-noto-sans sm:text-base'>NUMBER</p>
            </div>
            <SixBalls numbers={numbers} handleBallClick={handleBallClick}/>
            <ResetButton handleClick={handleReset}/>
        </div>
    );
};

export default LuckyLotto;