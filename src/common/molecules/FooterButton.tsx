import React, {ReactNode} from 'react';
import clsx from "clsx";
import {Link} from "react-router-dom";

/**
 * 이름, 비활성화 상태 svg, 활성화 상태 svg 3개를 받아
 * 하단 메뉴 버튼을 랜더하는 컴포넌트
 * @param link 라우터 링크
 * @param name 버튼 하단의 이름
 * @param isActive 활성화 여부
 * @param logo 비활성화시 svg
 * @param activeLogo 활성화시 svg
 * @param index 인덱스
 * @param handleClick 클릭이벤트 콜백함수
 */
const FooterButton = ({link, name, isActive, logo, activeLogo, index, handleClick}: {
    link: string,
    name: string,
    isActive: boolean,
    logo: ReactNode,
    activeLogo: ReactNode,
    index: number,
    handleClick: (index: number) => void
}) => {

    return (
        <Link to={link} className='flex flex-col items-center justify-center group' onClick={() => handleClick(index)}>
            {/* 활성화 되면 solid svg 를 넣어줌 */}
            {isActive ? activeLogo : logo}
            {/* 동적으로 글자 색 변경 */}
            <div className={clsx('mt-1.5 font-noto-sans text-xs font-semibold sm:text-sm',
                {
                    'text-orange-500': isActive,
                    'text-gray-600': !isActive
                }
            )}>{name}</div>
        </Link>
    );
};

export default FooterButton;