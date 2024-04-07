import React from 'react';
import ResetButton from "../../../../common/atom/ResetButton";
import SixBalls from "../../../../common/molecules/SixBalls";

/**
 * 럭키 추천 번호를 만들어주는 컴포넌트
 * @param numbers 로또 번호가 들어있는 숫자 배열
 * @param handleBallClick 공 클릭 콜백 이벤트
 * @param handleReset 리셋 버튼 클릭 시 이벤트
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