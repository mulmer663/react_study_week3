import React from 'react';
import SixBalls from "./SixBalls";
import {FaShuffle} from "react-icons/fa6";

const DrawBalls = ({index, lotto}: { index: number, lotto: number[] }) => {
    return (
        <div key={index} className='w-11/12 h-14 flex flex-row justify-around items-center border rounded-full border-stone-200'>
            <div className='font-jamsil text-3xl text-gray-500 font-bold'>{index + 1}</div>
            <SixBalls numbers={lotto}/>
            <FaShuffle size={25} color='#6b7280'/>
        </div>
    );
};

export default DrawBalls;