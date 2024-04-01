import React from 'react';
import Tile from "../../../common/atom/Tile";
import Timer from "./Timer";
import {text} from "node:stream/consumers";

/**
 * 타이머 전체 영역 컴포넌트
 */
const TimerArea = () => {

    const currentDate: Date = new Date();
    // 일단 목표날짜는 아래처럼 새팅함
    const targetDate: Date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() + 3,
        currentDate.getHours() + 4,
        currentDate.getMinutes() + 12,
        currentDate.getSeconds() + 25
    );

    return (
        <div className="flex h-16 flex-row items-start bg-stone-100">
                <div className="mt-4 flex h-fit basis-5/12 justify-center sm:mt-2">
                    <Tile text={"1302회차 마감 시간"}/>
                </div>
            <div className="mt-4 h-fit basis-7/12 sm:mt-2">
                <Timer endTime={targetDate}/>
            </div>
        </div>
    );
};

export default TimerArea;