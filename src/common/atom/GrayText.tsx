import React from 'react';

/**
 * 초작은 회색글자 원자 컴포넌트
 * @param text
 */
const GrayText = ({text}: { text: string }) => {
    return (
        <p className="text-[0.5rem] font-semibold font-sans text-gray-400">{text}</p>
    );
};

export default GrayText;