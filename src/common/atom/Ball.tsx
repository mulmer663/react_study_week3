import React from 'react';
import clsx from "clsx";

/**
 * 숫자를 받아 각 숫자 범위별 색깔을 만들어 나타내는 로또볼 원자 컴포넌트
 * @param num
 * @param index 인덱스
 * @param handleClick Optional한 클릭이벤트 핸들러
 */
const Ball = ({num, index, handleClick}: { num: number, index: number, handleClick?: (index: number) => void }) => {
    return (
        <div
            className={clsx('content-center rounded-full text-center text-base font-bold size-8 font-jamsil select-none sm:size-10 sm:text-lg',
                {
                    'text-stone-100 bg-stone-100 hover:bg-stone-300 hover:text-stone-300': num <= 0,
                    'text-white bg-[#f2b526] cursor-default': 1 <= num && num <= 10,
                    'text-white bg-[#3d74ad] cursor-default': 11 <= num && num <= 20,
                    'text-white bg-[#de4c10] cursor-default': 21 <= num && num <= 30,
                    'text-white bg-[#9295A4] cursor-default': 31 <= num && num <= 40,
                    'text-white bg-[#2eaa62] cursor-default': 41 <= num
                },
                {
                    'cursor-pointer': handleClick,
                    'cursor-default': !handleClick
                })}
            onClick={() => handleClick ? handleClick(index) : null}
        >{num}
        </div>
    );
};

export default Ball;