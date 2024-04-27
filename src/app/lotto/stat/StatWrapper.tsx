import React from 'react';
import NumberStatistics from "./number/NumberStatistics";
import SectionStatistics from "./section/SectionStatistics";
import {Link, Route, Routes} from "react-router-dom";
import TileButton from "../../../common/atom/TileButton";

const StatWrapper = () => {
    return (
        <div className="flex h-full flex-col justify-start">
            <div className="flex h-16 flex-row items-center justify-center bg-stone-100">
                <Link to={"/lotto/stat/number"}>
                    <TileButton text={'번호별 당첨 통계'} isActive={true}/>
                </Link>
                <Link to={"/lotto/stat/section"}>
                    <TileButton text={'구간별 당첨 통계'} isActive={false}/>
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