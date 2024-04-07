import React from 'react';

/**
 * sm 너비까지 넓혀지지 않는 한 보이지 않는 동적 레이아웃용 컴포넌트
 * @param text
 */
const HiddenTile = ({text}: { text: string }) => {
    return (
        <div className="hidden w-min items-center bg-white p-1 text-base font-medium text-orange-400 font-noto-sans text-nowrap sm:flex">
            {text}
        </div>
    );
};

export default HiddenTile;