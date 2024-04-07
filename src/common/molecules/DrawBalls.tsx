import React from 'react';
import SixBalls from "./SixBalls";
import {FaShuffle} from "react-icons/fa6";

/**
 * index와 number[] 를 받아 index를 머릿말로 numbers는 로또로 만드는 로또 추첨 분자 컴포넌트
 * @param index 인덱스
 * @param lottos 로또 번호들이 들어잇는 숫자 배열
 * @param handleDrawButtonClick 물결 추첨버튼 클릭시 이벤트
 */
const DrawBalls = ({index, lotto, handleDrawButtonClick}: {
    index: number,
    lotto: number[],
    handleDrawButtonClick: (index: number) => void
}) => {
    return (
        <div key={index}
             className='flex h-14 w-11/12 flex-row items-center justify-around rounded-full border border-stone-200'>
            <div className='text-3xl font-bold text-gray-500 font-jamsil'>{index + 1}</div>
            <SixBalls numbers={lotto}/>
            <button onClick={() => handleDrawButtonClick(index)}>
                <FaShuffle size={25} color='#6b7280'/>
            </button>
        </div>
    );
};

export default DrawBalls;