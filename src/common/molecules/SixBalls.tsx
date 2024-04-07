import React from 'react';
import Ball from "../atom/Ball";

/**
 * number[] 를 받아 로또 일련 모양을 만드는 컴포넌트
 * @param numbers 로또 번호가 들어있는 숫자 배열
 * @param handleClick Optional 한 Ball 클릭 이벤트 핸들러
 */
const SixBalls = ({numbers, handleBallClick}: { numbers: number[], handleBallClick?: (index: number) => void}) => {
    return (
        <div className='flex flex-row items-center justify-between gap-1 sm:gap-3'>
            {numbers.map((num, index) =>
                <Ball key={index} num={num} index={index} handleClick={handleBallClick}/>)}
        </div>
    );
};

export default SixBalls;