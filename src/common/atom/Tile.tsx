import React from 'react';

/**
 * 작은 흰색 타일 원자 컴포넌트
 * @param text
 */
const Tile = ({text}: { text: string }) => {
    return (
        <div className="bg-white text-orange-400 font-noto-sans font-medium p-1 w-min text-nowrap flex items-center">
            {text}
        </div>
    );
};

export default Tile;