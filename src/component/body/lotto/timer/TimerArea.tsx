import React from 'react';
import Tile from "../../../../common/atom/Tile";
import Timer from "./Timer";
import {getTargetDate} from "../../../../common/utils/Utils";
import HiddenTile from "../../../../common/atom/HiddenTile";

/**
 * 타이머 전체 영역 컴포넌트
 */
const TimerArea = () => {

    const currentDate: Date = new Date();
    // 일단 목표날짜는 항상 매주 토요일 8시 까지
    const targetDate: Date = getTargetDate(currentDate);

    return (
        <div className="flex h-16 flex-row items-start bg-stone-100">
                <div className="mt-4 flex h-fit basis-5/12 flex-row justify-center sm:mt-2 sm:basis-7/12">
                    <Tile text={"1302회차 마감 시간"}/>
                    <HiddenTile text={"[매주 토요일 오후 8시]"}/>
                </div>
            <div className="mt-4 h-fit basis-7/12 sm:mt-2 sm:basis-5/12">
                <Timer endTime={targetDate}/>
            </div>
        </div>
    );
};

export default TimerArea;