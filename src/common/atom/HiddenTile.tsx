import React from 'react';

const HiddenTile = ({text}: { text: string }) => {
    return (
        <div className="hidden w-min items-center bg-white p-1 text-base font-medium text-orange-400 font-noto-sans text-nowrap sm:flex">
            {text}
        </div>
    );
};

export default HiddenTile;