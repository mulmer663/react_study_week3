import React from 'react';

/**
 * LUCKY NUMBER 에 쓰이는 작은 회색 Reset 원자 컴포넌트
 */
const ResetButton = () => {
    return (
        <button className='p-1 mr-1 rounded-full font-noto-sans text-gray-600 text-center text-sm content-center bg-gray-100 hover:bg-gray-300 sm:text-base sm:p-2 sm:w-24'>
            RESET
        </button>
    );
};

export default ResetButton;