import React, {ReactNode, useState} from 'react';
import clsx from "clsx";

/**
 * 이름, 비활성화 상태 svg, 활성화 상태 svg 3개를 받아
 * 하단 메뉴 버튼을 랜더하는 컴포넌트
 * @param name
 * @param logo
 * @param activeLogo
 */
const FooterButton = ({name, logo, activeLogo}: { name: string, logo: ReactNode, activeLogo: ReactNode }) => {
    // 활성화 여부 상태
    const [isActive, setIsActive] = useState(false);

    // 클릭 이벤트 핸들러
    const handleClick = () => {
        setIsActive(!isActive);
    }

    return (
        <div className='flex flex-col items-center justify-center group' onClick={handleClick}>
            {/* 활성화 되면 solid svg 를 넣어줌 */}
            {isActive ? activeLogo : logo}
            <div className={clsx('mt-1.5 font-noto-sans text-xs font-semibold sm:text-sm',
                {
                    'text-orange-500': isActive,
                    'text-gray-600': !isActive
                }
                )}>{name}</div>
        </div>
    );
};

export default FooterButton;