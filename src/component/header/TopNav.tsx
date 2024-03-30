import React from 'react';

const tabList = ['번호생성', '회차검색', '번호통계'] as const

/**
 * 상단 탭 부분
 */
const TopNav = () => {
    return (
        <div className="flex flex-row justify-around">
            {tabList.map((it, index) =>
                <div key={index} className="font-gmarket font-bold text-xl sm:text-2xl text-white h-12 content-center hover:border-b-2 border-white cursor-pointer">
                    {it}</div>)}
        </div>
    );
};

export default TopNav;