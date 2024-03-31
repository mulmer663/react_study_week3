import React from 'react';
import ResetButton from "../../../common/atom/ResetButton";
import SixBalls from "../../../common/molecules/SixBalls";

/**
 * 럭키 번호 추첨 컴포넌트
 */
const LuckyLotto = () => {
    const numbers: number[] = [0, 10, 20, 30, 40, 45]
    return (
        <div className="h-16 flex flex-row justify-between items-center">
            <div className="h-5/6 flex flex-col justify-around gap-1.5 ml-1 hover:cursor-grab active:cursor-grabbing">
                <div className='w-[3px] h-1/2 bg-orange-500 sm:w-2'></div>
                <div className='w-[3px] h-1/2 bg-gray-200 sm:w-2'></div>
            </div>
            <div className='hover:cursor-grab active:cursor-grabbing sm:flex'>
                <p className='text-gray-600 font-noto-sans text-xs font-semibold sm:text-base sm:pr-2'>LUCKY</p>
                <p className='text-gray-600 font-noto-sans text-xs sm:text-base'>NUMBER</p>
            </div>
            <SixBalls numbers={numbers}/>
            <ResetButton/>
        </div>
    );
};

export default LuckyLotto;