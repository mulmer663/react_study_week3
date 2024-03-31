import React from 'react';
import SixBalls from "./SixBalls";
import {FaShuffle} from "react-icons/fa6";

/**
 * index와 number[] 를 받아 index를 머릿말로 numbers는 로또로 만드는 로또 추첨 분자 컴포넌트
 * @param index
 * @param lottos
 */
const DrawBalls = ({index, lottos}: { index: number, lottos: number[] }) => {
    return (
        <div key={index} className='w-11/12 h-14 flex flex-row justify-around items-center border rounded-full border-stone-200'>
            <div className='font-jamsil text-3xl text-gray-500 font-bold'>{index + 1}</div>
            <SixBalls numbers={lottos}/>
            <FaShuffle size={25} color='#6b7280'/>
        </div>
    );
};

export default DrawBalls;