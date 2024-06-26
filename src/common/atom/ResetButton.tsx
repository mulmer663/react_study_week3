import React from 'react';

/**
 * LUCKY NUMBER 에 쓰이는 작은 회색 Reset 원자 컴포넌트
 */
const ResetButton = ({handleClick}: { handleClick: () => void }) => {
    return (
        <button
            className='mr-1 w-1/5 content-center rounded-full bg-gray-100 p-1 text-center text-sm
            text-gray-600 font-noto-sans pointHover:hover:bg-gray-300 sm:text-base sm:p-2 sm:w-24
            active:scale-105 transition'
            onClick={handleClick}>
            RESET
        </button>
    );
};

export default ResetButton;