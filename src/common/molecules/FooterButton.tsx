import React, {ReactNode, useState} from 'react';
import clsx from "clsx";
import logo from "../../component/header/Logo";
import button from "../atom/Button";

/**
 * 이름, 비활성화 상태 svg, 활성화 상태 svg 3개를 받아
 * 하단 메뉴 버튼을 랜더하는 컴포넌트
 * @param name
 * @param isActive
 * @param logo
 * @param activeLogo
 * @param handleClick
 */
const FooterButton = ({name, isActive, logo, activeLogo, index, handleClick}: {
    name: string,
    isActive: boolean,
    logo: ReactNode,
    activeLogo: ReactNode,
    index: number,
    handleClick: (index: number) => void
}) => {

    return (
        <button className='flex flex-col items-center justify-center group' onClick={() => handleClick(index)}>
            {/* 활성화 되면 solid svg 를 넣어줌 */}
            {isActive ? activeLogo : logo}
            <div className={clsx('mt-1.5 font-noto-sans text-xs font-semibold sm:text-sm',
                {
                    'text-orange-500': isActive,
                    'text-gray-600': !isActive
                }
            )}>{name}</div>
        </button>
    );
};

export default FooterButton;