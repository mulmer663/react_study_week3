import React from 'react';

/**
 * 작은 회색 타일 원자 컴포넌트
 * @param text
 */
const GrayTile = ({text}: { text: string }) => {
    return (
        <div className="flex w-min items-center bg-stone-100 p-1 font-medium text-gray-500 font-noto-sans text-nowrap">
            {text}
        </div>
    );
};

export default GrayTile;