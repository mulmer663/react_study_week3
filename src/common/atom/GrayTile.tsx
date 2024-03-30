import React from 'react';

/**
 * 작은 회색 타일 원자 컴포넌트
 * @param text
 */
const GrayTile = ({text}: { text: string }) => {
    return (
        <div className="bg-stone-100 text-gray-500 font-noto-sans font-medium p-1 w-min text-nowrap flex items-center">
            {text}
        </div>
    );
};

export default GrayTile;