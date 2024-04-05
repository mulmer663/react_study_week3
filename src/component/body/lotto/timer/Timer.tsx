import React, {useEffect, useState} from 'react';
import {calcTimeLeft} from "../../../../common/utils/Utils";
import Tile from "../../../../common/atom/Tile";
import GrayTile from "../../../../common/atom/GrayTile";
import GrayText from "../../../../common/atom/GrayXxsText";
import TimeTile from "../../../../common/molecules/TimeTile";

/**
 * 핵심 타이머 컴포넌트 목표 시간을 받아 현재 시간과의 차이로 타이머 컴포넌트들을 쭉 랜더함
 * @param endTime
 */
const Timer = ({endTime}: { endTime: Date }) => {
    const [currentTime, setCurrentTime] = useState(new Date());

    // 1초마다 currentTime을 업데이트하는 useEffect
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        // 컴포넌트가 unmount될 때 interval 해제
        return () => clearInterval(intervalId);
    }, []); // 빈 배열을 전달하여 컴포넌트가 mount될 때 한 번만 실행

    const {days, hours, minutes, seconds} = calcTimeLeft(endTime, currentTime);

    return (
        <div className="flex h-fit flex-row justify-center gap-1">
            {/* 시간 아래 글자 때문에 한 번 더 flex 박스 안으로 감싼다.. */}
            <div className="flex flex-col items-center">
                <Tile text={days.toString()}/>
                <GrayText text={"DAY"}/>
            </div>
            <GrayTile text={":"}/>
            <TimeTile time={hours} indexText={"HOURS"}/>
            <GrayTile text={":"}/>
            <TimeTile time={minutes} indexText={"MINUTES"}/>
            <GrayTile text={":"}/>
            <TimeTile time={seconds} indexText={"SECONDS"}/>
        </div>
    );
}

export default Timer;