import React from 'react';
import Ball from "../atom/Ball";

const SixBalls = ({numbers}: { numbers: number[] }) => {
    return (
        <div className='flex flex-row justify-between items-center gap-1'>
            {numbers.map((num, index) =>
                <Ball key={index} num={num}/>)}
        </div>
    );
};

export default SixBalls;