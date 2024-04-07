import React from 'react';
import {popupDangerAlert} from "../../../common/utils/Utils";

const tabList = ['번호생성', '회차검색', '번호통계'] as const

/**
 * 상단 탭 부분
 */
const TopNav = () => {

    return (
        <div className="flex flex-row justify-around">
            {/* 지금이 탭 부분은 기능 구현이 안되서 클릭시 경고 알람 띄움 */}
            {tabList.map((it, index) =>
                <div key={index} className="h-12 cursor-pointer content-center border-white text-xl font-bold text-white font-gmarket hover:border-b-2 sm:text-2xl"
                onClick={popupDangerAlert}>
                    {it}</div>)}
        </div>
    );
};

export default TopNav;