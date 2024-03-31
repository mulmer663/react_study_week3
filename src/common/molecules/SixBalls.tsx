import React from 'react';
import Ball from "../atom/Ball";

/**
 * number[] 를 받아 로또 일련 모양을 만드는 컴포넌트
 * @param numbers
 */
const SixBalls = ({numbers}: { numbers: number[] }) => {
    return (
        <div className='flex flex-row justify-between items-center gap-1 sm:gap-3'>
            {numbers.map((num, index) =>
                <Ball key={index} num={num}/>)}
        </div>
    );
};

export default SixBalls;