import React from 'react';
import Reset from "../../../common/atom/Reset";
import SixBalls from "../../../common/molecules/SixBalls";

/**
 * 럭키 번호 추첨 컴포넌트
 */
const LuckyLotto = () => {
    const numbers: number[] = [0, 10, 20, 30, 40, 45]
    return (
        <div className="h-16 flex flex-row justify-between items-center">
            <div className="h-5/6 flex flex-col justify-around gap-1.5 ml-1 hover:cursor-grab active:cursor-grabbing">
                <div className='w-[3px] h-1/2 bg-orange-500'></div>
                <div className='w-[3px] h-1/2 bg-gray-200'></div>
            </div>
            <div className='hover:cursor-grab active:cursor-grabbing'>
                <p className='text-gray-600 font-noto-sans text-xs font-semibold'>LUCKY</p>
                <p className='text-gray-600 font-noto-sans text-xs'>NUMBER</p>
            </div>
            <SixBalls numbers={numbers}/>
            <Reset/>
        </div>
    );
};

export default LuckyLotto;