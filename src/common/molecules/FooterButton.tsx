import React, {ReactNode, useState} from 'react';
import clsx from "clsx";

const FooterButton = ({name, logo, activeLogo}: { name: string, logo: ReactNode, activeLogo: ReactNode }) => {
    // 활성화 여부 상태
    const [isActive, setIsActive] = useState(false);

    // 클릭 이벤트 핸들러
    const handleClick = () => {
        setIsActive(!isActive);
    }

    return (
        <div className='group flex flex-col justify-center items-center' onClick={handleClick}>
            {/* 활성화 되면 활성 아이콘 넣어줌 */}
            {isActive ? activeLogo : logo}
            <div className={clsx('mt-1.5 font-noto-sans text-xs font-semibold',
                {
                    'text-orange-500': isActive,
                    'text-gray-600': !isActive
                }
                )}>{name}</div>
        </div>
    );
};

export default FooterButton;