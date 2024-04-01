import React from 'react';

/**
 * 더 작은 회색글자 원자 컴포넌트
 * @param text
 */
const GrayText = ({text}: { text: string }) => {
    return (
        <p className="font-sans font-semibold text-gray-400 text-[0.5rem] sm:text-xs">{text}</p>
    );
};

export default GrayText;