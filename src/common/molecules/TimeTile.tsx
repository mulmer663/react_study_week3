import React from 'react';
import Tile from "../atom/Tile";
import {formatTime} from "../utils/Utils";
import GrayText from "../atom/GrayXxsText";

/**
 * 시간과 인덱스 텍스트를 받아 만드는 시간 타일 분자 컴포넌트
 * @param time
 * @param indexText
 */
const TimeTile = ({time, indexText}: { time: number, indexText: string }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-row justify-center gap-1">
                <Tile text={formatTime(time)[0]}/>
                <Tile text={formatTime(time)[1]}/>
            </div>
            <div>
                <GrayText text={indexText}/>
            </div>
        </div>
    );
};

export default TimeTile;