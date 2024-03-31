import React from 'react';

/**
 * 작은 흰색 타일 원자 컴포넌트
 * @param text
 */
const Tile = ({text}: { text: string }) => {
    return (
        <div className="bg-white text-orange-400 text-[0.925rem] font-noto-sans font-medium p-1 w-min text-nowrap flex items-center sm:text-lg">
            {text}
        </div>
    );
};

export default Tile;