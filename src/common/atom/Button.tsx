import React from 'react';

const Button = ({text}: { text: string }) => {
    return (
        <button
            className='w-24 h-10 border rounded-full font-noto-sans text-gray-500 text-center text-lg font-semibold content-center bg-white hover:bg-stone-100 active:bg-orange-500'>
            {text}
        </button>
    );
};

export default Button;