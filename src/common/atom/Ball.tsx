import React from 'react';
import clsx from "clsx";

const Ball = ({num}: { num: number }) => {
    return (
        <div className={clsx('size-8 rounded-full font-jamsil text-base text-center font-bold content-center',
            {
                'text-stone-100 bg-stone-100 cursor-pointer hover:bg-stone-300 hover:text-stone-300': num <= 0,
                'text-white bg-[#f2b526] cursor-default': 1 <= num && num <= 10,
                'text-white bg-[#3d74ad] cursor-default': 11 <= num && num <= 20,
                'text-white bg-[#de4c10] cursor-default': 21 <= num && num <= 30,
                'text-white bg-[#9295A4] cursor-default': 31 <= num && num <= 40,
                'text-white bg-[#2eaa62] cursor-default': 41 <= num
            })}>{num}
        </div>
    );
};

export default Ball;