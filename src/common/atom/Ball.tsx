import React from 'react';
import clsx from "clsx";

/**
 * <p>숫자를 받아 각 숫자 범위별 색깔을 만들어 나타내는 로또볼 원자 컴포넌트</p>
 * <p>기본적으로 0은 비활성화 상태이고 1~45에 구간별로 색깔 존재 </p>
 * <p>또한 handleClick 이 존재하면 포인터 css를 동적으로 줘서 클릭 할 수 잇는 요소로 변화시킴</p>
 * @param num 숫자
 * @param index 인덱스
 * @param handleClick Optional 한 클릭 이벤트 핸들러
 */
const Ball = ({num, index, handleClick}: { num: number, index: number, handleClick?: (index: number) => void }) => {
    return (
        <div
            className={clsx('content-center rounded-full text-center text-base font-bold size-8 font-jamsil select-none sm:size-10 sm:text-lg',
                {
                    'text-stone-100 bg-stone-100': num <= 0,
                    'text-white bg-[#f2b526] cursor-default': 1 <= num && num <= 10,
                    'text-white bg-[#3d74ad] cursor-default': 11 <= num && num <= 20,
                    'text-white bg-[#de4c10] cursor-default': 21 <= num && num <= 30,
                    'text-white bg-[#9295A4] cursor-default': 31 <= num && num <= 40,
                    'text-white bg-[#2eaa62] cursor-default': 41 <= num
                },
                /* handleClink 존재시 클릭 할 수 있게 변경하고 hover 이펙트도 추가함 */
                {
                    'cursor-pointer hover:bg-stone-300 hover:text-stone-300': handleClick,
                    'cursor-default': !handleClick
                })}
            onClick={() => handleClick ? handleClick(index) : null}
        >{num}
        </div>
    );
};

export default Ball;