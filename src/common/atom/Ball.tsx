import React from 'react';
import clsx from "clsx";

const Ball = ({num}: { num: number }) => {
    return (
        <div className={clsx('size-9 rounded-full font-jamsil text-white text-base text-center font-bold content-center',
            {
                'text-stone-100 bg-stone-100 cursor-pointer hover:bg-stone-300 hover:text-stone-300': num <= 0,
                'bg-[#f2b526] cursor-default': 1 <= num && num <= 10,
                'bg-[#3d74ad] cursor-default': 11 <= num && num <= 20,
                'bg-[#de4c10] cursor-default': 21 <= num && num <= 30,
                'bg-[#9295A4] cursor-default': 31 <= num && num <= 40,
                'bg-[#2eaa62] cursor-default': 41 <= num
            })}>{num}
        </div>
    );
};

export default Ball;