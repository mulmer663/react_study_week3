import React from 'react';
import clsx from "clsx";

const TileButton = ({text, isActive}: { text: string, isActive: boolean }) => {
    return (
        <button
            className={clsx("flex w-min items-center rounded-sm border-2 border-stone-200 bg-white px-6 py-1 text-base font-semibold font-noto-sans text-nowrap sm:px-12 sm:text-xl",
                {
                    'text-gray-600': !isActive,
                    'text-orange-400': isActive
                }
            )}>
            {text}
        </button>
    );
};

export default TileButton;