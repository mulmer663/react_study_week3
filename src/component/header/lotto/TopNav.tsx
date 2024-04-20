import React from 'react';
import {popupDangerAlert} from "../../../common/utils/Utils";
import {Link} from "react-router-dom";


/**
 * 상단 탭 부분
 */
const TopNav = () => {

    return (
        <div className="flex flex-row justify-around">
            <Link to={"/lotto/draw"}
                  className="h-12 cursor-pointer content-center border-white text-xl font-bold text-white font-gmarket hover:border-b-2 sm:text-2xl">
                번호생성</Link>
            <Link to={"/lotto/search"}
                  className="h-12 cursor-pointer content-center border-white text-xl font-bold text-white font-gmarket hover:border-b-2 sm:text-2xl">
                회차검색</Link>
            <Link to={"/lotto/stat"}
                  className="h-12 cursor-pointer content-center border-white text-xl font-bold text-white font-gmarket hover:border-b-2 sm:text-2xl">
                번호통계</Link>
        </div>
    );
};

export default TopNav;