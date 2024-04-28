import React, {useState} from 'react';
import NumberStatistics from "./number/NumberStatistics";
import SectionStatistics from "./section/SectionStatistics";
import {Link, Route, Routes} from "react-router-dom";
import TileButton from "../../../common/atom/TileButton";

const StatWrapper = () => {
    const [isNumberStat, setIsNumberStat] = useState(true);

    function handleClickEvent(numberStat: boolean) {
        setIsNumberStat(numberStat);
    }

    return (
        <div className="flex h-full flex-col justify-start">
            <div className="flex h-16 w-10/12 flex-row items-end justify-between place-self-center">
                <Link onClick={() => handleClickEvent(true)} to={"/lotto/stat/number"}>
                    <TileButton text={'번호별 당첨 통계'} isActive={isNumberStat}/>
                </Link>
                <Link onClick={() => handleClickEvent(false)} to={"/lotto/stat/section"}>
                    <TileButton text={'구간별 당첨 통계'} isActive={!isNumberStat}/>
                </Link>
            </div>
            <Routes>
                <Route path="/number" element={<NumberStatistics/>}/>
                <Route path="/section" element={<SectionStatistics/>}/>
            </Routes>
        </div>
    );
};

export default StatWrapper;