import React from 'react';
import Tile from "../../../common/atom/Tile";
import Timer from "./Timer";
import {text} from "node:stream/consumers";

/**
 * 타이머 전체 영역 컴포넌트
 */
const TimerArea = () => {

    const currentDate: Date = new Date();
    const targetDate: Date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() + 3,
        currentDate.getHours() + 4,
        currentDate.getMinutes() + 12,
        currentDate.getSeconds() + 25
    );

    return (
        <div className="h-16 bg-stone-100 flex flex-row items-start">
                <div className="h-fit basis-5/12 flex justify-center mt-4">
                    <Tile text={"1302회차 마감 시간"}/>
                </div>
            <div className="h-fit basis-7/12 mt-4">
                <Timer endTime={targetDate}/>
            </div>
        </div>
    );
};

export default TimerArea;