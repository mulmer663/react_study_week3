import React from 'react';

/**
 * 작은 흰색 타일 원자 컴포넌트
 * @param text
 */
const Tile = ({text}: { text: string }) => {
    return (
        <div className="flex w-min items-center bg-white p-1 font-medium text-orange-400 text-[0.925rem] font-noto-sans text-nowrap sm:text-lg">
            {text}
        </div>
    );
};

export default Tile;