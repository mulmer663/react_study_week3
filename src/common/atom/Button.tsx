import React from 'react';

/**
 * Body에 쓰이는 흰색 버튼 원자 컴포넌트
 * @param text
 */
const Button = ({text, handleClick}: { text: string, handleClick: () => void }) => {
    return (
        <button
            className='w-24 h-10 border rounded-full font-noto-sans text-gray-500 text-center text-lg font-semibold content-center bg-white active:bg-orange-500 active:text-white
            sm:text-xl sm:w-36' onClick={handleClick}>
            {text}
        </button>
    );
};

export default Button;